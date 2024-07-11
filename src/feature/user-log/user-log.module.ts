import { Module } from '@nestjs/common'
import { UserLogService } from './user-log.service'
import { UserLogController } from './user-log.controller'
import { UserLog } from './entities/user-log.mongo.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserLog], process.env.DATABASE_MONGO_DATA_SOURCE),
  ],
  controllers: [UserLogController],
  providers: [UserLogService],
})
export class UserLogModule {}
