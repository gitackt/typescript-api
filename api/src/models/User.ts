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

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  uuid?: string

  @Column()
  name?: string

  @Column()
  @IsEmail()
  email?: string

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date

  @OneToMany(type => Topic, topic => topic.user)
  topics?: Topic[]
}
