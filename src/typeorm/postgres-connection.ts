import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Logger, Injectable } from '@nestjs/common';

dotenv.config();

const {
  host,
  port = 5432,
  username,
  password,
  database,
} = process.env;

dotenv.config();

const databaseConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host,
  port: Number(port),
  username,
  password,
  database,
  entities: [
    `${__dirname}/../**/*.model*{.ts,.js}`
  ],
  migrations: [
    `${__dirname}/../migrations/*{.ts,.js}`
  ],
  cli: {
    migrationsDir: './migrations',
  },
  synchronize: false
};

export const getDatabaseConfig = () => {
  console.log(databaseConfig);
  return databaseConfig;
};
