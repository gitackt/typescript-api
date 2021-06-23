import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './User'
import { Category } from './Category'

type ITopic = {
  title: string
  content: string
}

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  title: string

  @Column({ type: 'longtext' })
  content: string

  @ManyToOne(type => User, user => user.topics)
  user?: User

  @ManyToOne(type => Category, category => category.topics)
  category?: Category

  constructor(params: ITopic) {
    this.title = params.title
    this.content = params.content
  }

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date
}
