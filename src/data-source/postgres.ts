import { DataSource, DataSourceOptions } from 'typeorm'
import * as dotenv from 'dotenv'
dotenv.config()

export const PostgresDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_POSTGRES_HOST,
  port: parseInt(process.env.DATABASE_POSTGRES_PORT) || 5432,
  database: process.env.DATABASE_POSTGRES_DATABASE,
  username: process.env.DATABASE_POSTGRES_USERNAME,
  password: process.env.DATABASE_POSTGRES_PASSWORD,
  synchronize: false,
  migrationsRun: true,
  logging: process.env.NODE_ENV === 'LOCAL',
  entities: [__dirname + '/../../dist/**/*.sql.entity.js'],
  migrations: [__dirname + '/../../dist/migrations/*.js'],
}
const PostgresDataSource = new DataSource(PostgresDataSourceOptions)
export default PostgresDataSource
