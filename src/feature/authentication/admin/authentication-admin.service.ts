import { Injectable } from '@nestjs/common'
import { AdminService } from '../../admin/admin.service'
import { AuthenticationAdminLoginDto } from './dto/authentication-admin-login.dto'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthenticationAdminService {
  constructor(
    private readonly adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  async login(input: AuthenticationAdminLoginDto): Promise<string> {
    const admin = await this.adminService.findOneByEmail(input.email)
    admin.comparePassword(input.password)
    const token = this.jwtService.sign({ id: admin.id })
    return token
  }
}
