import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { User } from './user'

describe('[UNIT] User Entity', () => {
  it('should be able to create a new user', () => {
    const uuid = new UniqueEntityId()

    const user = User.create(
      {
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: 'password123',
        phoneNumber: '99999-9999',
        role: 'manager',
        createdAt: new Date(),
      },
      1,
      uuid,
    )

    expect(user.id).toEqual(1)
    expect(user.uuid.toString()).toEqual(uuid.toString())
  })
})
