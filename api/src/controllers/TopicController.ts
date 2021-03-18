import { Request, Response } from 'express'
import httpContext from 'express-http-context'

import { TopicService } from '../domain/service/TopicService'
import { Topic } from '../interfaces/api'
import { Topic as TopicModel } from '../domain/models/Topic'

export class TopicController {
  private readonly topicService: TopicService

  constructor(topicService: TopicService) {
    this.topicService = topicService
  }

  async topics(req: Request, res: Response) {
    const order = req.query.order as 'ASC' | 'DESC' | undefined
    const limit = req.query.limit as number | undefined
    const offset = req.query.offset as number | undefined
    const topics = await this.topicService.getTopics(order, limit, offset)
    res.status(200).send(topics.map(topic => topicConverter(topic)))
  }

  async topic(req: Request, res: Response) {
    const topic = await this.topicService.getTopic(Number(req.params.id))
    if (!topic) {
      res.status(400).send({ message: 'not found' })
      return
    }
    res.status(200).send(topicConverter(topic))
  }

  async createTopic(req: Request, res: Response) {
    const body = req.body as Topic
    const userId = httpContext.get('userId')
    const topic = await this.topicService.createTopic(topicModelConverter(body), userId)
    res.status(200).send(topic)
  }

  async updateTopic(req: Request, res: Response) {
    const body = req.body as Topic
    const userId = httpContext.get('userId')
    const topic = await this.topicService.updateTopic(topicModelConverter(body), userId)
    if (!topic) {
      res.status(400).send({ message: 'not found' })
      return
    }
    res.status(200).send(topicConverter(topic))
  }
}

const topicConverter = (model: TopicModel): Topic => {
  const response: Topic = {
    id: model.id || 0,
    title: model.title || '',
    content: model.content || '',
    createdAt: model.createdAt ? model.createdAt.toISOString() : '',
    updatedAt: model.updatedAt ? model.updatedAt.toISOString() : '',
  }
  return response
}

const topicModelConverter = (topic: Topic): TopicModel => {
  const response: TopicModel = {
    title: topic.title || '',
    content: topic.content || '',
    createdAt: topic.createdAt ? new Date(topic.createdAt) : undefined,
    updatedAt: topic.updatedAt ? new Date(topic.updatedAt) : undefined,
  }
  return response
}
