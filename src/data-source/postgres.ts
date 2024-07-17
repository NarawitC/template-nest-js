import { DataSource, DataSourceOptions } from 'typeorm'
import * as dotenv from 'dotenv'
import { DataBaseName } from '../enum/database'
dotenv.config()

export const PostgresDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  name: DataBaseName.POSTGRES,
  host: process.env.DATABASE_POSTGRES_HOST,
  port: parseInt(process.env.DATABASE_POSTGRES_PORT) || 5432,
  database: process.env.DATABASE_POSTGRES_DATABASE,
  username: process.env.DATABASE_POSTGRES_USERNAME,
  password: process.env.DATABASE_POSTGRES_PASSWORD,
  synchronize: false,
  migrationsRun: true,
  logging: process.env.NODE_ENV === 'LOCAL',
  entities: [__dirname + '/../**/*.sql.entity{.ts,.js}'],
  migrations: [__dirname + '/../migration/*{.ts,.js}'],
}
const PostgresDataSource = new DataSource(PostgresDataSourceOptions)
export default PostgresDataSource
