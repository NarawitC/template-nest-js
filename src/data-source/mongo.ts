import { DataSource, DataSourceOptions } from 'typeorm'
import * as dotenv from 'dotenv'
import { DataBaseName } from '../enum/database'
dotenv.config()

export const MongoDataSourceOptions: DataSourceOptions = {
  type: 'mongodb',
  name: DataBaseName.MONGO,
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
