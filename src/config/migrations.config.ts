import { dbConfiguration } from '@config/typeorm.config';
import { DataSource } from 'typeorm';

export default new DataSource({
  ...dbConfiguration,
  type: 'postgres',
  entities: ['dist/data/entities/*.js'],
  migrations: ['dist/data/migrations/*.js'],
});
