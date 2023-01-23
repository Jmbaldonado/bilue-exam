import {
  DB_DATABASE,
  DB_HOST,
  DB_LOGGING_FLAG,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from '@common/environment';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export const dbConfiguration = {
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  synchronize: false,
  entities: [`${path.join(__dirname, '../data/entities/*.{js,ts}')}`],
  migrations: [`${path.join(__dirname, '../data/migrations/*.{js,ts}')}`],
  logging: DB_LOGGING_FLAG === 'enabled',
};

export const databaseConfig: TypeOrmModuleOptions = {
  ...dbConfiguration,
  type: 'postgres',
};
