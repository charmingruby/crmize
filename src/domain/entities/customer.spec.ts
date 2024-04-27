import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Customer } from './customer'

describe('[UNIT] Customer Entity', () => {
  it('should be able to create a new customer', () => {
    const uuid = new UniqueEntityId()

    const customer = Customer.create(
      {
        name: 'John',
        lastName: 'Doe',
        email: 'johndoe@email.com',
        phoneNumber: '99999-9999',
        city: 'city',
        country: 'country',
        state: 'state',
        job: 'job',
        createdAt: new Date(),
      },
      1,
      uuid,
    )

    expect(customer.id).toEqual(1)
    expect(customer.uuid.toString()).toEqual(uuid.toString())
  })
})
