import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  createUserId?: number

  @Column()
  name?: string
}
