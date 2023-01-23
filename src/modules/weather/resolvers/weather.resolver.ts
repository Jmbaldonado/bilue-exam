import { WeatherService } from '@modules/weather/services/weather.service';
import { Resolver } from '@nestjs/graphql';

@Resolver()
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) {}
}
