import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserLog } from './entity/user-log.mongo.entity'
import { Repository } from 'typeorm'
import { DataBaseName } from '@/enum/database'

@Injectable()
export class UserLogService {
  constructor(
    @InjectRepository(UserLog, DataBaseName.MONGO)
    private userLogRepository: Repository<UserLog>,
  ) {}

  async create(requestBody: any) {
    return this.userLogRepository.save({ requestBody })
  }

  async getAll() {
    return this.userLogRepository.find()
  }
}
