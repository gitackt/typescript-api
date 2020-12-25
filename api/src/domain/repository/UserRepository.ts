// TypeORM
import { Repository, getRepository } from 'typeorm'
import 'reflect-metadata'

import { User } from '../models/User'

export class UserRepository {
  userRepository: Repository<User> = getRepository(User)

  async getUser(id: string) {
    const response = await this.userRepository.findOne({ id: Number(id) })
    return response
  }

  async getUsers() {
    const response = await this.userRepository.find()
    return response
  }

  async createUser(user: User) {
    const response = await this.userRepository.save(user)
    return response
  }

  async updateUser(user: User) {
    const response = await this.userRepository.update({ id: Number(user.id!) }, user)
    return response
  }

  async deleteUser(user: User) {
    const response = await this.userRepository.delete({ id: Number(user.id!) })
    return response
  }
}
