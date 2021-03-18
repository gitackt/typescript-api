import { createConnection, getConnectionOptions } from 'typeorm'
import express, { Request, Response } from 'express'
import httpContext from 'express-http-context'
import cors from 'cors'
import 'reflect-metadata'
import { json } from 'body-parser'
import * as admin from 'firebase-admin'

import { auth } from './middleware/auth'
import { httpLogger, DatabaseQueryLogger } from './middleware/logger'
import { UserRepository } from './domain/repository/UserRepository'
import { TopicRepository } from './domain/repository/TopicRepository'
import { UserService } from './domain/service/UserService'
import { TopicService } from './domain/service/TopicService'
import { UserController } from './controllers/UserController'
import { TopicController } from './controllers/TopicController'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
})

const port = process.env.PORT || 8080

const main = async () => {
  const connectionOptions = await getConnectionOptions()
  Object.assign(connectionOptions, { logger: new DatabaseQueryLogger() })

  createConnection(connectionOptions)
    .then(() => {
      const userRepository = new UserRepository()
      const topicRepository = new TopicRepository()
      const userService = new UserService(userRepository)
      const topicService = new TopicService(topicRepository)
      const userController = new UserController(userService)
      const topicController = new TopicController(topicService)

      const app = express()

      app.use(cors())
      app.use(json())
      app.use(httpContext.middleware)
      app.use(httpLogger)

      app.get('/topics', topicController.topics)
      app.get('/topics/:id', topicController.topic)

      app.use((req: Request, res: Response, next: any) => {
        return auth(req, res, next, admin.auth(), userRepository)
      })

      app.get('/user/:id', userController.user)

      app.listen({ port }, () => console.log(`server on http://localhost:${port}`))
    })
    .catch(e => console.log(e.message))
}

main()
