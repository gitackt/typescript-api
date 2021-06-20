import { Request, Response } from 'express'
import httpContext from 'express-http-context'

import { UserService } from '../service/UserService'
import { userConverter } from '../converter/UserConverter'

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
}
