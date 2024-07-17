import { Controller, Post, Body } from '@nestjs/common'
import { CustomerService } from './customer.service'
import { CreateCustomerDto } from './dto/create-customer.dto'

@Controller('customer')
export class CustomerController {
  constructor(private userService: CustomerService) {}

  @Post()
  async create(@Body() createUserDto: CreateCustomerDto) {
    return this.userService.create(createUserDto)
  }
}
