import { createConnection, getConnectionOptions } from 'typeorm'
import express, { Request, Response } from 'express'
import httpContext from 'express-http-context'
import cors from 'cors'
import 'reflect-metadata'
import * as admin from 'firebase-admin'

import { auth } from './middleware/auth/firebaseAuth'
import { isAdmin } from './middleware/auth/isAdmin'
import { httpLogger } from './middleware/logger/logger'
import { DatabaseQueryLogger } from './middleware/logger/app/dbLogger'
import { UserController } from './api/controllers/UserController'
import { TopicController } from './api/controllers/TopicController'
import { PORT } from './api/constants'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
})

const main = async () => {
  const connectionOptions = await getConnectionOptions()
  Object.assign(connectionOptions, { logger: new DatabaseQueryLogger() })
  createConnection(connectionOptions).then(() => {
    // Controllers
    const userController = new UserController()
    const topicController = new TopicController()

    // Middleware
    const app = express()
    app.use(cors())
    app.use(httpContext.middleware)
    app.use(httpLogger)

    // API with auth
    app.use((req: Request, res: Response, next: any) => auth(req, res, next, admin.auth()))
    app.get('/topics', topicController.topics)
    app.get('/topics/:id', topicController.topic)

    // API for admin
    app.use(isAdmin)
    app.get('/users', userController.users)
    app.get('/user/:id', userController.user)

    app.listen({ port: PORT }, () => console.log(`server on http://localhost:${PORT}`))
  })
}

main().catch(e => console.log(e))
