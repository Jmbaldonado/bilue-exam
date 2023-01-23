import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '@entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return super.findOne({ where: { email } });
  }
}
