import * as dotenv from 'dotenv';
dotenv.config();

const APP_PORT = +process.env.APP_PORT || 3000;
const APP_ENV = process.env.APP_ENV || '';
const APP_VERSION = process.env.APP_VERSION || '0.0.1';

const CORS_ALLOWED_HEADERS =
  process.env.CORS_ALLOWED_HEADERS ||
  'Access-Control-Allow-Headers,Origin,X-Requested-With,Content-Type,Accept,Authorization';
const CORS_EXPOSED_HEADERS = process.env.CORS_EXPOSED_HEADERS || '';
const CORS_WHITELIST = process.env.CORS_WHITELIST || '';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = +process.env.DB_PORT || 5432;
const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';
const DB_DATABASE = process.env.DB_DATABASE || 'postgres';
const DB_LOGGING_FLAG = process.env.DB_LOGGING_FLAG || 'disabled';

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '';

const ENABLE_GRAPHQL_TRACING =
  process.env.ENABLE_GRAPHQL_TRACING === 'true' ||
  process.env.ENABLE_GRAPHQL_TRACING === undefined;

const WEATHER_API_KEY = process.env.WEATHER_API_KEY || '';

export {
  APP_PORT,
  APP_ENV,
  APP_VERSION,
  CORS_ALLOWED_HEADERS,
  CORS_EXPOSED_HEADERS,
  CORS_WHITELIST,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_LOGGING_FLAG,
  JWT_SECRET,
  JWT_EXPIRATION,
  ENABLE_GRAPHQL_TRACING,
  WEATHER_API_KEY,
};
