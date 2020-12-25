import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm'
import { IsEmail } from 'class-validator'
import { Topic } from './Topic'
import { Tag } from './Tag'
import { Category } from './Category'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @PrimaryGeneratedColumn('uuid')
  uuid?: string

  @Column()
  firebaseUuid?: string

  @Column()
  @IsEmail()
  email?: string

  @Column()
  name?: string

  @Column({ nullable: true, default: null })
  imageUrl?: string

  @Column()
  userName?: string

  @Column({ nullable: true, default: null })
  discription?: string

  @Column({ default: false })
  isAdmin?: boolean

  @Column({ default: false })
  isActive?: boolean

  @Column({ default: false })
  isPremium?: boolean

  @OneToMany(type => Topic, topic => topic.user)
  topics?: Topic[]

  @ManyToMany(type => Category)
  @JoinTable()
  categories?: Category[]

  @ManyToMany(type => Tag)
  @JoinTable()
  tags?: Tag[]
}
