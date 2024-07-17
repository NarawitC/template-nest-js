import {
  Entity,
  ObjectId,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity()
export class UserLog {
  @ObjectIdColumn({ name: 'id' })
  _id: ObjectId

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @Column({ name: 'request_body' })
  requestBody: JSON
}
