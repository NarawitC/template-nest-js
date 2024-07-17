import { Module } from '@nestjs/common'
import { CustomerService } from './customer.service'
import { CustomerController } from './customer.controller'
import { Customer } from './entity/customer.sql.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataBaseName } from '@/enum/database'

@Module({
  imports: [TypeOrmModule.forFeature([Customer], DataBaseName.POSTGRES)],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
