import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm'
import { User } from './User'
import { Category } from './Category'
import { Tag } from './Tag'

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  userId?: number

  @Column()
  title?: string

  @Column({ type: 'longtext' })
  content?: string

  @Column({ default: null, nullable: true })
  tumbnailUrl?: string

  @Column({ default: false })
  isDraft?: boolean

  @Column({ default: false })
  isArchived?: boolean

  @ManyToOne(type => User, user => user.topics)
  user?: User

  @ManyToMany(type => Category)
  @JoinTable()
  categories?: Category[]

  @ManyToMany(type => Tag)
  @JoinTable()
  tags?: Tag[]
}
