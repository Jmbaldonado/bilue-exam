import { WeatherController } from '@modules/weather/controllers/weather.controller';
import { WeatherService } from '@modules/weather/services/weather.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  providers: [WeatherService],
  controllers: [WeatherController],
  exports: [WeatherService],
})
export class WeatherModule {}
