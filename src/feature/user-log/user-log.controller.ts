import { Controller, Post, Body, Get } from '@nestjs/common'
import { UserLogService } from './user-log.service'

@Controller('user-log')
export class UserLogController {
  constructor(private readonly userLogService: UserLogService) {}

  @Post('')
  create(@Body() body: any) {
    return this.userLogService.create(body)
  }

  @Get('')
  findAll() {
    return this.userLogService.getAll()
  }
}
