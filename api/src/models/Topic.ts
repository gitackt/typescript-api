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

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  title?: string

  @Column({ type: 'longtext' })
  content?: string

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date

  @ManyToOne(type => User, user => user.topics)
  user?: User

  @ManyToMany(type => Category)
  @JoinTable()
  categories?: Category[]
}
