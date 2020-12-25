import * as admin from 'firebase-admin'
import httpContext from 'express-http-context'
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { User } from '../domain/models/User'

export const auth = (req: Request, res: Response, next: any, auth: admin.auth.Auth) => {
  const tokenHeader = req.headers.authorization
  if (!tokenHeader || tokenHeader.split(' ')[0] !== 'Bearer') {
    res.status(500).send({ message: 'token not set' })
    return
  }

  auth
    .verifyIdToken(tokenHeader.split(' ')[1])
    .then(async token => {
      const userId = token.uid
      let user = await getRepository(User).findOne({ firebaseUuid: userId })
      if (user === undefined) {
        user = new User()
        user.firebaseUuid = userId
        user.email = token.email
        user.name = token.name
        user.userName = token.name
        user.isActive = true
        await getRepository(User).save(user)
      }

      if (user.isAdmin) {
        httpContext.set('adminUserId', user.id)
      }
      httpContext.set('userId', user.id)
      next()
    })
    .catch(() => {
      res.status(500).send({ message: 'unauthorized' })
      return
    })
}

export const isAdmin = async (req: Request, res: Response, next: any) => {
  const adminUserId = httpContext.get('adminUserId')
  if (!adminUserId) {
    res.status(500).send({ message: 'not admin' })
    return
  }
  next()
  return
}
