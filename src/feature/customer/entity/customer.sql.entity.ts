import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Customer {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ name: 'first_name' })
  firstName: string

  @Column({ name: 'last_name' })
  lastName: string

  @Column({ name: 'email', nullable: true })
  email: string
}
