import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IsEmail } from 'class-validator'
import { Topic } from './Topic'

type IUser = {
  name: string
  email: string
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @Column()
  @IsEmail()
  email: string

  @OneToMany(type => Topic, topic => topic.user)
  topics?: Array<Topic>

  constructor(obj: IUser) {
    this.name = obj.name
    this.email = obj.email
  }

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date
}
