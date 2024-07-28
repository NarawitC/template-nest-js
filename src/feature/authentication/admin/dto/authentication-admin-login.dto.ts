import { IsEmail, IsString } from 'class-validator'

export class AuthenticationAdminLoginDto {
  @IsEmail()
  email: string

  @IsString()
  password: string
}
