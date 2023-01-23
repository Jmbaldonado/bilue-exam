import { WeatherService } from '@modules/weather/services/weather.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) {}
}
