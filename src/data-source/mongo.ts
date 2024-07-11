import { DataSource, DataSourceOptions } from 'typeorm'
import * as dotenv from 'dotenv'
dotenv.config()

export const MongoDataSourceOptions: DataSourceOptions = {
  type: 'mongodb',
  name: process.env.DATABASE_MONGO_DATA_SOURCE,
  port: parseInt(process.env.DATABASE_MONGO_PORT) || 27017,
  database: process.env.DATABASE_MONGO_DATABASE,
  url: process.env.DATABASE_MONGO_URL,
  authSource: 'admin',
  synchronize: false,
  logging: process.env.NODE_ENV === 'LOCAL',
  entities: [__dirname + '/../**/*.mongo.entity{.ts,.js}'],
}
const MongoDataSource = new DataSource(MongoDataSourceOptions)
export default MongoDataSource
