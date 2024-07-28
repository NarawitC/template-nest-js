import { Module } from '@nestjs/common'
import { AdminService } from './admin.service'
import { AdminController } from './admin.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataBaseName } from '@/enum/database'
import { Admin } from './entity/admin.sql.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Admin], DataBaseName.POSTGRES)],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
