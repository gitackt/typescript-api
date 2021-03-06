import { Factory, Seeder } from 'typeorm-seeding'
import { Topic } from '../models/Topic'

export class createTopic implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Topic)().createMany(10)
  }
}
