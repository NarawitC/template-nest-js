import { Controller, Post, Body } from '@nestjs/common'
import { CreateAdminDto } from './dto/create-admin.dto'
import { AdminService } from './admin.service'

@Controller('admin')
export class AdminController {
  constructor(private readonly userLogService: AdminService) {}

  @Post('')
  create(@Body() body: CreateAdminDto) {
    this.userLogService.create(body)
    return { message: 'Admin created' }
  }
}
