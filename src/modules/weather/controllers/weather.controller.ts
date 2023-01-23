import { WeatherService } from '@modules/weather/services/weather.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getWeatherUsingApi(@Query('q') q: string) {
    return await this.weatherService.getWeatherUsingApi(q);
  }
}
