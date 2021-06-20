import Faker from 'faker'
import { define } from 'typeorm-seeding'
import { User } from '../models/User'

define(User, (faker: typeof Faker) => {
  const gender = faker.random.number(1)
  const firstName = faker.name.firstName(gender)
  const lastName = faker.name.lastName(gender)
  const userName = faker.internet.userName(firstName, lastName)
  const email = userName + '@gmail.com'

  const user = new User({ name: `${firstName} ${lastName}`, email })
  return user
})
