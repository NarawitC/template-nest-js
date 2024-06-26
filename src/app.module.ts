import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './feature/user/user.module'
import { ConfigModule } from '@nestjs/config'
import configuration from '@/config/config-module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostgresDataSourceOptions } from './data-source/postgres'

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRoot(PostgresDataSourceOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
