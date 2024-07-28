import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DataBaseName } from '@/enum/database'
import { CreateAdminDto } from './dto/create-admin.dto'
import { Admin } from './entity/admin.sql.entity'

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin, DataBaseName.POSTGRES)
    private adminRepository: Repository<Admin>,
  ) {}

  async create(input: CreateAdminDto) {
    const admin = this.adminRepository.create(input)
    admin.hashPassword()
    return true
  }
  async findOneByEmail(email: string) {
    const admin = await this.adminRepository.findOneBy({ email })
    if (!admin) {
      throw new NotFoundException('Admin not found')
    }
    return admin
  }
  async findOneById(id: number) {
    const admin = await this.adminRepository.findOneBy({ id })
    if (!admin) {
      throw new NotFoundException('Admin not found')
    }
    return admin
  }
}
