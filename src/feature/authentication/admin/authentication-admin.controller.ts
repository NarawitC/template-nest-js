import { Controller, Post, Body } from '@nestjs/common'
import { AuthenticationAdminLoginDto } from './dto/authentication-admin-login.dto'
import { AuthenticationAdminService } from './authentication-admin.service'

@Controller('authentication/admin')
export class AuthenticationAdminController {
  constructor(
    private readonly authenticationAdminService: AuthenticationAdminService,
  ) {}

  @Post('login')
  async login(@Body() body: AuthenticationAdminLoginDto) {
    const token = await this.authenticationAdminService.login(body)
    return { token }
  }
}
