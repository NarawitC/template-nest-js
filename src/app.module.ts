import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CustomerModule } from './feature/customer/customer.module'
import { ConfigModule } from '@nestjs/config'
import configuration from '@/config/config-module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostgresDataSourceOptions } from './data-source/postgres'
import { MongoDataSourceOptions } from './data-source/mongo'
import { UserLogModule } from './feature/user-log/user-log.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(PostgresDataSourceOptions),
    TypeOrmModule.forRoot(MongoDataSourceOptions),
    CustomerModule,
    UserLogModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
