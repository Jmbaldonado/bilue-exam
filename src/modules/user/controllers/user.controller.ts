import { LoginUserInput } from '@modules/user/dtos/input/login-user.input';
import { UserService } from '@modules/user/services/user.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async loginUser(@Body() loginCredentials: LoginUserInput): Promise<string> {
    return this.userService.loginUser(loginCredentials);
  }
}
