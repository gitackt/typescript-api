import { Topic } from '../models/Topic'
import { TopicRepository } from '../repository/TopicRepository'

const topicRepository = new TopicRepository()

export class TopicService {
  async getTopic(id: string) {
    const response = await topicRepository.getTopic(id)
    return response
  }

  async getTopics() {
    const response = await topicRepository.getTopics()
    return response
  }

  async createTopic(topic: Topic) {
    const response = await topicRepository.createTopic(topic)
    return response
  }

  async updateTopic(topic: Topic) {
    const response = await topicRepository.updateTopic(topic)
    return response
  }

  async deleteTopic(topic: Topic) {
    const response = await topicRepository.deleteTopic(topic)
    return response
  }
}
