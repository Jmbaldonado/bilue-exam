import { RestAuthGuard } from '@common/auth/guards/rest-auth.guard';
import { WeatherOutput } from '@modules/weather/dtos/output/weather.output';
import { WeatherService } from '@modules/weather/services/weather.service';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('v1')
  async getWeatherV1(
    @Query('zip') zip: string,
    @Query('countryCode') countryCode: string,
  ): Promise<WeatherOutput> {
    return await this.weatherService.getWeather(zip, countryCode);
  }

  @Get('v2')
  @UseGuards(RestAuthGuard)
  async getWeatherV2(
    @Query('zip') zip: string,
    @Query('countryCode') countryCode: string,
  ): Promise<WeatherOutput> {
    return await this.weatherService.getWeather(zip, countryCode);
  }
}
