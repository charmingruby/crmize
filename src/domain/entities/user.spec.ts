import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { User } from './user'

describe('[UNIT] User Entity', () => {
  it('should be able to create a new user', () => {
    const uuid = new UniqueEntityId()

    const user = User.create(
      {
        name: 'John Doe',
        email: 'john@doe.com',
        password: 'password123',
        phoneNumber: '99 99999-9999',
        role: 'APPLICANT',
        createdAt: new Date(),
      },
      1,
      uuid,
    )

    expect(user.id).toEqual(1)
    expect(user.uuid.toString()).toEqual(uuid.toString())
    expect(user.uuid).toBeInstanceOf(UniqueEntityId)
    expect(user.name).toEqual('John Doe')
    expect(user.email).toEqual('john@doe.com')
    expect(user.phoneNumber).toEqual('99 99999-9999')
    expect(user.password).toEqual('password123')
    expect(user.applicationStatus).toEqual('PENDING')
    expect(user.applicationAnsweredAt).toBeNull()
    expect(user.deletedAt).toBeNull()
    expect(user.updatedAt).toBeNull()
    expect(user.createdAt).toEqual(expect.any(Date))
  })
})
