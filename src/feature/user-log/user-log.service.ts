import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserLog } from './entities/user-log.mongo.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserLogService {
  constructor(
    @InjectRepository(UserLog, process.env.DATABASE_MONGO_DATA_SOURCE)
    private userLogRepository: Repository<UserLog>,
  ) {}

  create(requestBody: any) {
    console.log('requestBody', requestBody)
    return this.userLogRepository.save({ requestBody })
  }
}
