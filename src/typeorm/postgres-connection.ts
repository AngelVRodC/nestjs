import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

dotenv.config();

const {
  HOST,
  PORT,
  USERNAME,
  PASSWORD,
  DATABASE,
} = process.env;

dotenv.config();

export const postgresConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: HOST,
  port: PORT ? Number(PORT) : 5432,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  entities: [
    `${__dirname}/../**/*.model*{.ts,.js}`
  ],
  migrations: [
    `${__dirname}/../migrations/*{.ts,.js}`
  ]
};
