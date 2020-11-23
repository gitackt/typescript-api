import { ping } from '../fixtures/ping'

describe('Cypress', () => {
  it('is working', () => {
    const example = {
      name: 'Using fixtures to represent data',
      email: 'hello@cypress.io',
      body: 'Fixtures are a great way to mock data for responses to routes',
    }
    expect(example).to.equal(ping)
  })
})
