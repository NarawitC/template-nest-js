import { Module } from '@nestjs/common'
import { UserLogService } from './user-log.service'
import { UserLogController } from './user-log.controller'
import { UserLog } from './entity/user-log.mongo.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataBaseName } from '@/enum/database'

@Module({
  imports: [TypeOrmModule.forFeature([UserLog], DataBaseName.MONGO)],
  controllers: [UserLogController],
  providers: [UserLogService],
})
export class UserLogModule {}
