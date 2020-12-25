import { Request, Response } from 'express'
import { TopicService } from '../domain/service/TopicService'

export class TopicController {
  async topics(req: Request, res: Response) {
    const topics = await new TopicService().getTopics()
    res.status(200).send(topics)
  }

  async topic(req: Request, res: Response) {
    const id = req.params.id
    const topic = await new TopicService().getTopic(id)
    res.status(200).send(topic)
  }
}
