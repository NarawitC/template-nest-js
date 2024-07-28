import { IsEmail, IsOptional, IsString } from 'class-validator'

export class CreateAdminDto {
  @IsEmail()
  email: string

  @IsString()
  password: string
}
