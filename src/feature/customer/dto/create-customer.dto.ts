import { IsEmail, IsOptional, IsString } from 'class-validator'

export class CreateCustomerDto {
  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsEmail()
  @IsOptional()
  email: string

  // firstName: string

  // lastName: string

  // email: string
}
