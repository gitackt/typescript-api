import { User } from '../models/User'
import { UserRepository } from '../repository/UserRepository'

const userRepository = new UserRepository()

export class UserService {
  async getUser(id: string) {
    const response = await userRepository.getUser(id)
    return response
  }

  async getUsers() {
    const response = await userRepository.getUsers()
    return response
  }

  async reateUser(user: User) {
    const response = await userRepository.createUser(user)
    return response
  }

  async updateUser(user: User) {
    const response = await userRepository.updateUser(user)
    return response
  }

  async deleteUser(user: User) {
    const response = await userRepository.deleteUser(user)
    return response
  }
}
