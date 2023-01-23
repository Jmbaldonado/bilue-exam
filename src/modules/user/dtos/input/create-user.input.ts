import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  @MaxLength(64, {
    message: 'Email Address must be shorter than or equal to 64 characters',
  })
  email: string;

  @Field()
  password: string;

  @Field()
  @MinLength(2, {
    message: 'First Name must be longer than or equal to 2 characters',
  })
  @Matches(/^[a-zA-Z. ]+$/)
  firstName: string;

  @Field()
  @MinLength(2, {
    message: 'Last Name must be longer than or equal to 2 characters',
  })
  @Matches(/^[a-zA-Z. ]+$/)
  lastName: string;

  @Field()
  zipCode: number;

  @Field()
  countryCode: string;
}
