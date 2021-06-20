import { Topic, Category } from '../interfaces/api'
import { Topic as TopicModel } from '../models/Topic'

export const topicConverter = (model: TopicModel): Topic => {
  const response: Topic = {
    id: model.id || 0,
    userId: model.user?.id || 0,
    title: model.title || '',
    content: model.content || '',
    createdAt: model.createdAt ? model.createdAt.toISOString() : '',
    updatedAt: model.updatedAt ? model.updatedAt.toISOString() : '',
  }
  return response
}

export const topicModelConverter = (topic: Topic): TopicModel => {
  const response: TopicModel = {
    title: topic.title || '',
    content: topic.content || '',
  }
  return response
}
