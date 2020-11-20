import { Factory, Seeder } from 'typeorm-seeding'
import { User } from '../../domain/models/User'

export class CreateUser implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(User)().createMany(10)
  }
}
