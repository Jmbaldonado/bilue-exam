import { AuthUser } from '@common/auth/dtos/output/auth-user.decorator';
import { GqlAuthGuard } from '@common/auth/guards/gql-auth.guard';
import { UserEntity } from '@entities/user.entity';
import { WeatherOutput } from '@modules/weather/dtos/output/weather.output';
import { UseGuards } from '@nestjs/common';
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
    const user = await this.userService.registerUser(data);
    return UserMapper.map(user);
  }
  @Query(() => UserOutput)
  @UseGuards(GqlAuthGuard)
  async getUserProfile(@AuthUser() user: UserEntity) {
    return UserMapper.map(user);
  }

  @Query(() => WeatherOutput)
  @UseGuards(GqlAuthGuard)
  async getWeather(@AuthUser() user: UserEntity) {
    return this.userService.getWeatherForUser(user.id);
  }
}
