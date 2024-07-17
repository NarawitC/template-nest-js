import { Injectable } from '@nestjs/common'
import { CreateCustomerDto } from './dto/create-customer.dto'
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
}
