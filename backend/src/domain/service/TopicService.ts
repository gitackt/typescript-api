// TypeORM
import { Repository, getRepository } from 'typeorm'
import 'reflect-metadata'

import { Topic } from '../models/Topic'
import { TopicRepository } from '../repository/TopicRepository'

export class TopicService {
  async getTopic(id: string) {
    const response = await new TopicRepository().getTopic(id)
    return response
  }

  async getTopics() {
    const response = await new TopicRepository().getTopics()
    return response
  }

  async createTopic(topic: Topic) {
    const response = await new TopicRepository().createTopic(topic)
    return response
  }

  async updateTopic(topic: Topic) {
    const response = await new TopicRepository().updateTopic(topic)
    return response
  }

  async deleteTopic(topic: Topic) {
    const response = await new TopicRepository().deleteTopic(topic)
    return response
  }
}
