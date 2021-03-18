import * as admin from 'firebase-admin'
import httpContext from 'express-http-context'
import { Request, Response } from 'express'

import { User } from '../domain/models/User'
import { UserRepository } from '../domain/repository/UserRepository'

export const auth = (
  req: Request,
  res: Response,
  next: any,
  auth: admin.auth.Auth,
  userRepository: UserRepository,
) => {
  const tokenHeader = req.headers.authorization
  if (!tokenHeader || tokenHeader.split(' ')[0] !== 'Bearer') {
    res.status(401).send({ message: 'token not set' })
    return
  }

  auth
    .verifyIdToken(tokenHeader.split(' ')[1])
    .then(async token => {
      const uuid = token.uid
      let user = await userRepository.findByUuid(uuid)
      if (user === undefined) {
        user = new User()
        user.uuid = uuid
        user.email = token.email
        user.name = token.name
        user = await userRepository.createUser(user)
      }
      httpContext.set('userId', user.id)
      next()
    })
    .catch(e => {
      console.error(e.message)
      res.status(401).send({ message: 'unauthorized' })
      return
    })
}
