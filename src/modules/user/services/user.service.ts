import { Injectable } from '@nestjs/common';
import { UserRepository } from '@modules/user/repositories/user.repository';
import { UserEntity } from '@entities/user.entity';
import { CreateUserInput } from '@modules/user/dtos/input/create-user.input';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    if (!users) return [];
    return users;
  }

  async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    const createdUser = await this.userRepository.save(createUserInput);
    return this.userRepository.findOne({ where: { id: createdUser.id } });
  }
}
