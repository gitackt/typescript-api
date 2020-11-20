import httpContext from 'express-http-context'
import { Request, Response } from 'express'

export const isAdmin = async (req: Request, res: Response, next: any) => {
  const adminUserId = httpContext.get('adminUserId')
  if (!adminUserId) {
    res.status(500).send({ message: 'not admin' })
    return
  }
  next()
  return
}
