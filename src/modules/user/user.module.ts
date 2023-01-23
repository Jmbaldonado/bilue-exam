import { JwtStrategy } from '@common/auth/strategy/jwt.strategy';
import { JWT_EXPIRATION, JWT_SECRET } from '@common/environment';
import { UserController } from '@modules/user/controllers/user.controller';
import { WeatherModule } from '@modules/weather/weather.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '@modules/user/repositories/user.repository';
import { UserService } from '@modules/user/services/user.service';
import { UserResolver } from '@modules/user/resolvers/user.resolver';
import { UserEntity } from '@entities/user.entity';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: JWT_SECRET,
        signOptions: {
          expiresIn: JWT_EXPIRATION,
        },
      }),
    }),
    TypeOrmModule.forFeature([UserEntity]),
    WeatherModule,
  ],
  providers: [UserService, UserResolver, UserRepository, JwtStrategy],
  controllers: [UserController],
})
export class UserModule {}
