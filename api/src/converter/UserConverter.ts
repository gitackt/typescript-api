import { User } from '../interfaces/api'
import { User as UserModel } from '../models/User'

export const userConverter = (model: UserModel): User => {
  const response: User = {
    id: model.id || 0,
    name: model.name || '',
    email: model.email || '',
    createdAt: model.createdAt ? model.createdAt.toISOString() : '',
    updatedAt: model.updatedAt ? model.updatedAt.toISOString() : '',
  }
  return response
}

export const userModelConverter = (user: User): UserModel => {
  const response: UserModel = {
    id: user.id,
    name: user.name,
    email: user.email,
  }
  return response
}
