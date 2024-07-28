import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import * as bcrypt from 'bcrypt'

@Entity()
export class Admin {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ name: 'email' })
  email: string

  @Column({ name: 'password' })
  password: string

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }

  comparePassword(password: string) {
    return bcrypt.compareSync(password, this.password)
  }
}
