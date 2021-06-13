import { Topic } from '../models/Topic'
import { TopicRepository } from '../repository/TopicRepository'
import { UserRepository } from '../repository/UserRepository'

export class TopicService {
  private readonly topicRepository: TopicRepository

  constructor(topicRepository: TopicRepository) {
    this.topicRepository = topicRepository
  }

  async getTopic(id: number) {
    const response = await this.topicRepository.getTopic(id)
    return response
  }

  async getTopics(order: 'ASC' | 'DESC' = 'DESC', limit = 10, offset = 0) {
    const response = await this.topicRepository.getTopics(order, limit, offset)
    return response
  }

  async createTopic(topic: Topic, userId: number) {
    const user = await new UserRepository().getUser(userId)
    if (!user) {
      return
    }
    await this.topicRepository.createTopic(topic, user)
    const response = await this.topicRepository.getTopic(topic.id!)
    return response
  }

  async updateTopic(topic: Topic, userId: number) {
    const user = await new UserRepository().getUser(userId)
    if (!user) {
      return
    }
    await this.topicRepository.updateTopic(topic, user)
    const response = await this.topicRepository.getTopic(topic.id!)
    return response
  }

  async deleteTopic(topic: Topic) {
    await this.topicRepository.deleteTopic(topic)
    const response = await this.topicRepository.getTopic(topic.id!)
    return response
  }
}
