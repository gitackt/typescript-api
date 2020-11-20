import { Request, Response } from 'express'
import { UserService } from '../../domain/service/UserService'

export class UserController {
  async users(req: Request, res: Response) {
    const users = await new UserService().getUsers()
    res.status(200).send(users)
  }

  async user(req: Request, res: Response) {
    const id = req.params.id
    const user = await new UserService().getUser(id)
    res.status(200).send(user)
  }
}
