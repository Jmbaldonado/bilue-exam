import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserOutput } from '@modules/user/dtos/output/user.output';
import { UserService } from '@modules/user/services/user.service';
import { UserMapper } from '@modules/user/dtos/mapper/user.mapper';
import { CreateUserInput } from '@modules/user/dtos/input/create-user.input';

@Resolver(() => UserOutput)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => [UserOutput])
  async getUsers(): Promise<UserOutput[]> {
    const users = await this.userService.getUsers();
    return UserMapper.mapArray(users);
  }

  @Mutation(() => UserOutput)
  async createUser(
    @Args('createUserInput') data: CreateUserInput,
  ): Promise<UserOutput> {
    const user = await this.userService.createUser(data);
    return UserMapper.map(user);
  }
}
