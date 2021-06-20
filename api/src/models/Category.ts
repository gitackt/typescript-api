import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { Topic } from './Topic'

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name?: string

  @OneToMany(type => Topic, topic => topic.category)
  topics?: Topic[]

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date
}
