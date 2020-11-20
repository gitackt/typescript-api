import { User } from '../models/User'

describe('User model test', () => {
  it('Create User', () => {
    const entity = new User()
    const answer = new User()
    expect(entity).toEqual(answer)
  })
})
