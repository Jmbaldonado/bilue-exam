import { UserEntity } from '@entities/user.entity';
import { CreateUserInput } from '@modules/user/dtos/input/create-user.input';
import { LoginUserInput } from '@modules/user/dtos/input/login-user.input';
import { PayloadInterface } from '@modules/user/dtos/interfaces/payload.interface';
import { UserRepository } from '@modules/user/repositories/user.repository';
import { WeatherService } from '@modules/weather/services/weather.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly i18n: I18nService,
    private readonly jwtService: JwtService,
    private readonly weatherService: WeatherService,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    if (!users) return [];
    return users;
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async registerUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    const userExist = await this.userRepository.findOneByEmail(
      createUserInput.email,
    );

    if (userExist) {
      throw new BadRequestException(
        await this.i18n.translate('user.USER_ALREADY_REGISTERED'),
      );
    }
    const createdUser = await this.userRepository.save({
      ...createUserInput,
      password: await this.hashPassword(createUserInput.password),
    });
    return this.userRepository.findOne({ where: { id: createdUser.id } });
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const user: UserEntity = await this.userRepository.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(
        await this.i18n.translate('user.USER_NOT_FOUND'),
      );
    }
    return user;
  }

  async loginUser(loginCredentials: LoginUserInput): Promise<string> {
    const user: UserEntity = await this.findByEmail(loginCredentials.email);
    if (
      user &&
      (await bcrypt.compare(loginCredentials.password, user.password))
    ) {
      const payload: PayloadInterface = {
        id: user.id,
        email: user.email,
      };
      return this.jwtService.sign(payload);
    } else {
      throw new UnauthorizedException(
        await this.i18n.translate('user.INVALID_CREDENTIALS'),
      );
    }
  }

  async getWeatherForUser(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(
        await this.i18n.translate('user.USER_NOT_FOUND'),
      );
    }

    return await this.weatherService.getWeather(
      user.zipCode.toString(),
      user.countryCode,
    );
  }
}
