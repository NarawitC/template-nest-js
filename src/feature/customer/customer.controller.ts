import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CustomerService } from './customer.service'
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateUserDto } from './dto/update-customer.dto'

@Controller('customer')
export class CustomerController {
  constructor(private userService: CustomerService) {}

  @Post()
  async create(@Body() createUserDto: CreateCustomerDto) {
    return this.userService.create(createUserDto)
  }

  // @Get()
  // async findAll() {
  //   return this.userService.findAll()
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id)
  // }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto)
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.userService.remove(+id)
  // }
}
