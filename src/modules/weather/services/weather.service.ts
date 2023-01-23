import { WEATHER_API_KEY } from '@common/environment';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly i18n: I18nService,
  ) {}

  private static readonly WEATHER_API_ENDPOINT = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}`;
  async getWeatherUsingApi(queryParam: string) {
    const response = await this.httpService
      .get(`${WeatherService.WEATHER_API_ENDPOINT}&q=${queryParam}`, {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
      })
      .pipe(map((res) => res.data));

    const data = await firstValueFrom(response);

    return {
      lon: data.location.lon,
      lat: data.location.lat,
      main: data.current.condition.text,
      description: data.current.condition.text,
      temp: data.current.temp_c,
      feels_like: data.current.feelslike_c,
      pressure: data.current.pressure_mb,
      humidity: data.current.humidity,
    };
  }
}
