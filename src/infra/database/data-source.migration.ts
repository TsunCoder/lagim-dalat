import * as path from 'path';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { DatabaseTypeEnum } from '@core/enums/databaseType.enum';

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export const dataSource = new DataSource({
  type: (process.env.DB_TYPE
    ? process.env.DB_TYPE
    : DatabaseTypeEnum.POSTGRES) as DatabaseTypeEnum,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/entities/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/migration/*.{ts,js}`],
  migrationsTableName: 'migrations',
});
