import { WEATHER_API_KEY } from '@common/environment';
import { WeatherOutput } from '@modules/weather/dtos/output/weather.output';
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly i18n: I18nService,
  ) {}

  async getWeather(zip: string, countryCode: string): Promise<WeatherOutput> {
    if (!zip || !countryCode) {
      throw new BadRequestException(
        await this.i18n.translate('weather.ZIP_REQUIRED'),
      );
    }
    const response = await this.httpService
      .get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${WEATHER_API_KEY}`,
        {
          headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
        },
      )
      .pipe(map((res) => res.data));

    const data = await firstValueFrom(response);

    return {
      lon: data.coord.lon,
      lat: data.coord.lat,
      main: data.weather[0].main,
      description: data.weather[0].description,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
    };
  }
}
