import Faker from 'faker'
import { define } from 'typeorm-seeding'
import { User } from '../domain/models/User'

define(User, (faker: typeof Faker) => {
  const gender = faker.random.number(1)
  const firstName = faker.name.firstName(gender)
  const lastName = faker.name.lastName(gender)
  const userName = faker.internet.userName(firstName, lastName)
  const email = userName + '@gmail.com'
  const uuid = faker.random.uuid()

  const user = new User()
  user.name = `${firstName} ${lastName}`
  user.userName = userName
  user.email = email
  user.uuid = uuid
  return user
})
