// TypeORM
import { Repository, getRepository } from 'typeorm'
import 'reflect-metadata'

import { User } from '../models/User'
import { UserRepository } from '../repository/UserRepository'

export class UserService {
  async getUser(id: string) {
    const response = await new UserRepository().getUser(id)
    return response
  }

  async getUsers() {
    const response = await new UserRepository().getUsers()
    return response
  }

  async reateUser(user: User) {
    const response = await new UserRepository().createUser(user)
    return response
  }

  async updateUser(user: User) {
    const response = await new UserRepository().updateUser(user)
    return response
  }

  async deleteUser(user: User) {
    const response = await new UserRepository().deleteUser(user)
    return response
  }
}
