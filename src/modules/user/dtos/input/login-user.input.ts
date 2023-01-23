import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class LoginUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(64, {
    message: 'Email Address must be shorter than or equal to 64 characters',
  })
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8, {
    message: 'Password must be longer than or equal to 8 characters',
  })
  @MaxLength(16, {
    message: 'Password must be shorter than or equal to 16 characters',
  })
  password: string;
}
