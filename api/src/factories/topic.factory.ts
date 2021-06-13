import Faker from 'faker'
import { define } from 'typeorm-seeding'
import { Topic } from '../models/Topic'

define(Topic, (faker: typeof Faker) => {
  const title = faker.name.title()
  const content = faker.random.words(100)

  const topic = new Topic()
  topic.title = title
  topic.content = content
  return topic
})
