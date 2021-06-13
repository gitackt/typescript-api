import { Repository, getRepository } from 'typeorm'
import 'reflect-metadata'

import { Topic } from '../models/Topic'
import { User } from '../models/User'

export class TopicRepository {
  private readonly topicRepository: Repository<Topic> = getRepository(Topic)

  async getTopic(id: number) {
    const response = await this.topicRepository.findOne({ id: id })
    return response
  }

  async getTopics(order: 'ASC' | 'DESC', limit: number, offset: number) {
    const response = await this.topicRepository.find({
      order: { id: order },
      take: limit,
      skip: offset,
    })
    return response
  }

  async createTopic(topic: Topic, user: User) {
    topic.user = user
    const response = await this.topicRepository.save(topic)
    return response
  }

  async updateTopic(topic: Topic, user: User) {
    const response = await this.topicRepository.update({ id: topic.id || 0, user: user }, topic)
    return response
  }

  async deleteTopic(topic: Topic) {
    const response = await this.topicRepository.delete({ id: topic.id || 0 })
    return response
  }
}
