import { Request, Response } from 'express'

export const auth = (req: Request, res: Response, next: any) => {
  const tokenHeader = req.headers.authorization

  if (!tokenHeader) {
    res.status(401).send({ message: 'token not set' })
    return
  }

  const isBearerToken = tokenHeader.split(' ')[0] !== 'Bearer'
  if (!isBearerToken) {
    res.status(401).send({ message: 'token not set' })
    return
  }

  const token = tokenHeader.split(' ')[1]
  console.log(token)

  next()
}
