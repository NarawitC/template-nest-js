import { DataSource, DataSourceOptions } from 'typeorm'
import * as dotenv from 'dotenv'
dotenv.config()

export const PostgresDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  name: process.env.DATABASE_POSTGRES_DATA_SOURCE,
  host: process.env.DATABASE_POSTGRES_HOST,
  port: parseInt(process.env.DATABASE_POSTGRES_PORT) || 5432,
  database: process.env.DATABASE_POSTGRES_DATABASE,
  username: process.env.DATABASE_POSTGRES_USERNAME,
  password: process.env.DATABASE_POSTGRES_PASSWORD,
  synchronize: false,
  migrationsRun: true,
  logging: process.env.NODE_ENV === 'LOCAL',
  entities: [__dirname + '/../**/*.sql.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
}
const PostgresDataSource = new DataSource(PostgresDataSourceOptions)
export default PostgresDataSource
