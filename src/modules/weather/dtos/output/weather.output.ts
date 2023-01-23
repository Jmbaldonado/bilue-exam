import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WeatherOutput {
  @Field({ nullable: true })
  lon?: number;
  @Field({ nullable: true })
  lat: number;
  @Field({ nullable: true })
  main: string;
  @Field({ nullable: true })
  description: string;
  @Field({ nullable: true })
  temp: number;
  @Field({ nullable: true })
  temp_min: number;
  @Field({ nullable: true })
  temp_max: number;
  @Field({ nullable: true })
  feels_like: number;
  @Field({ nullable: true })
  pressure: number;
  @Field({ nullable: true })
  humidity: number;
}
