import { User } from '../models/User'
import { UserRepository } from '../repository/UserRepository'

export class UserService {
  private readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }
  async getUser(id: number) {
    const response = await this.userRepository.getUser(id)
    return response
  }

  async createUser(user: User) {
    await this.userRepository.createUser(user)
    const response = await this.userRepository.getUser(user.id!)
    return response
  }

  async updateUser(user: User) {
    await this.userRepository.updateUser(user)
    const response = await this.userRepository.getUser(user.id!)
    return response
  }

  async deleteUser(user: User) {
    await this.userRepository.deleteUser(user)
    const response = await this.userRepository.getUser(user.id!)
    return response
  }
}
