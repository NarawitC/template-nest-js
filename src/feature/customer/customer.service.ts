import { Injectable } from '@nestjs/common'
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateUserDto } from './dto/update-customer.dto'
import { Customer } from './entity/customer.sql.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DataBaseName } from '@/enum/database'

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer, DataBaseName.POSTGRES)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(input: CreateCustomerDto) {
    return this.customerRepository.save(input)
  }

  // async findAll() {
  //   return `This action returns all user`
  // }

  // async findOne(id: number) {
  //   return `This action returns a #${id} user`
  // }

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`
  // }

  // async remove(id: number) {
  //   return `This action removes a #${id} user`
  // }
}
