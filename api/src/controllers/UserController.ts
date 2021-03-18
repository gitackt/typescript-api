import { Request, Response } from 'express'
import httpContext from 'express-http-context'

import { User } from '../interfaces/api'
import { User as UserModel } from '../domain/models/User'
import { UserService } from '../domain/service/UserService'

export class UserController {
  private readonly userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
  }

  async user(req: Request, res: Response) {
    const userId = httpContext.get('userId')
    const user = await this.userService.getUser(userId)
    if (!user) {
      res.status(400).send({ message: 'not found' })
      return
    }
    res.status(200).send(userConverter(user))
  }

  async updateUser(req: Request, res: Response) {
    const body = req.body as User
    const userId = httpContext.get('userId')
    if (userId !== body.id) {
      res.status(400).send({ message: 'invalid userId' })
      return
    }
    const user = await this.userService.updateUser(userModelConverter(body))
    if (!user) {
      res.status(400).send({ message: 'not found' })
      return
    }
    res.status(200).send(userConverter(user))
  }
}

const userConverter = (model: UserModel): User => {
  const response: User = {
    id: model.id || 0,
    name: model.name || '',
    email: model.email || '',
    createdAt: model.createdAt ? model.createdAt.toISOString() : '',
    updatedAt: model.updatedAt ? model.updatedAt.toISOString() : '',
  }
  return response
}

const userModelConverter = (user: User): UserModel => {
  const response: UserModel = {
    id: user.id,
    createdAt: user.createdAt ? new Date(user.createdAt) : undefined,
    updatedAt: user.updatedAt ? new Date(user.updatedAt) : undefined,
  }
  return response
}
