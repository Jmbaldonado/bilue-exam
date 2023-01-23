import { WeatherController } from '@modules/weather/controllers/weather.controller';
import { WeatherResolver } from '@modules/weather/resolvers/weather.resolver';
import { WeatherService } from '@modules/weather/services/weather.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  providers: [WeatherResolver, WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}
