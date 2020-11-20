// TypeORM
import { Repository, getRepository } from 'typeorm'
import 'reflect-metadata'

import { Topic } from '../models/Topic'

export class TopicRepository {
  topicRepository: Repository<Topic> = getRepository(Topic)

  async getTopic(id: string) {
    const response = await this.topicRepository.findOne({ id: Number(id) })
    return response
  }

  async getTopics() {
    const response = await this.topicRepository.find()
    return response
  }

  async createTopic(topic: Topic) {
    const response = await this.topicRepository.save(topic)
    return response
  }

  async updateTopic(topic: Topic) {
    const response = await this.topicRepository.update({ id: Number(topic.id!) }, topic)
    return response
  }

  async deleteTopic(topic: Topic) {
    const response = await this.topicRepository.delete({ id: Number(topic.id!) })
    return response
  }
}
