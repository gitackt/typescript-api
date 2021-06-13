import { Repository, getRepository } from 'typeorm'
import 'reflect-metadata'

import { User } from '../models/User'

export class UserRepository {
  private readonly userRepository: Repository<User> = getRepository(User)

  async getUser(id: number) {
    const response = await this.userRepository.findOne({ id: id })
    return response
  }

  async findByUuid(uuid: string) {
    const response = await this.userRepository.findOne({ uuid: uuid })
    return response
  }

  async createUser(user: User) {
    const response = await this.userRepository.save(user)
    return response
  }

  async updateUser(user: User) {
    const response = await this.userRepository.update({ id: user.id || 0 }, user)
    return response
  }

  async deleteUser(user: User) {
    const response = await this.userRepository.delete({ id: user.id || 0 })
    return response
  }
}
