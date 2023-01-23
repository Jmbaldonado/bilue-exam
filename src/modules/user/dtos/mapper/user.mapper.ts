import { UserEntity } from '@entities/user.entity';
import { UserOutput } from '@modules/user/dtos/output/user.output';

export class UserMapper {
  static map(user: UserEntity): UserOutput {
    if (!user) return undefined;

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      zipCode: user.zipCode,
      countryCode: user.countryCode,
    };
  }

  static mapArray(users: UserEntity[]): UserOutput[] {
    if (!users || users.length === 0) return [];

    return users.map((user) => this.map(user));
  }
}
