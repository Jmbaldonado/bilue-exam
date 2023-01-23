import { dbConfiguration } from '@config/typeorm.config';
import { DataSource } from 'typeorm';

export const seederConfig = new DataSource({
  ...dbConfiguration,
  type: 'postgres',
  entities: ['dist/data/entities/*.js'],
  migrations: ['dist/data/seeders/*.js'],
  migrationsTableName: 'seeders',
});
