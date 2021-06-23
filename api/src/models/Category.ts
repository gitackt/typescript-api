import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { Topic } from './Topic'

type ICategory = {
  name: string
}

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name: string

  @OneToMany(type => Topic, topic => topic.category)
  topics?: Topic[]

  constructor(params: ICategory) {
    this.name = params.name
  }

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date
}
