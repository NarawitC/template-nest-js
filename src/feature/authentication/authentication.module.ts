import { Module } from '@nestjs/common'
import { AuthenticationController } from './authentication.controller'
import { AuthenticationAdminService } from './admin/authentication-admin.service'
import { AuthenticationAdminController } from './admin/authentication-admin.controller'
import { AdminModule } from '../admin/admin.module'

@Module({
  imports: [AdminModule],
  controllers: [AuthenticationController, AuthenticationAdminController],
  providers: [AuthenticationAdminService],
})
export class AuthenticationModule {}
