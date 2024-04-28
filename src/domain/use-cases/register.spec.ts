import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { RegisterUseCase } from './register'
import { FakeHashService } from 'test/cryptography/fake-hash'
import { makeUser } from 'test/factories/make-user'
import { ConflictError } from '../errors/conflict'

let inMemoryUsersRepository: InMemoryUsersRepository
let hashService: FakeHashService
let sut: RegisterUseCase

describe('[UNIT] Register Use Case', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    hashService = new FakeHashService()
    sut = new RegisterUseCase(inMemoryUsersRepository, hashService)
  })

  it('shoud be able to register a new account successfully', async () => {
    const password = 'password123'

    const result = await sut.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password,
      phoneNumber: '99 99999-9999',
    })

    expect(inMemoryUsersRepository.items.length).toEqual(1)
    expect(result.user).toEqual(inMemoryUsersRepository.items[0])
  })

  it('should not be to register a new account with an already taken email', async () => {
    const conflictingEmail = 'john@doe.com'

    const user = makeUser({ email: conflictingEmail })
    await inMemoryUsersRepository.create(user)

    expect(
      async () =>
        await sut.execute({
          name: 'John Doe',
          email: conflictingEmail,
          password: 'password123',
          phoneNumber: '88 88888-8888',
        }),
    ).rejects.toThrowError(ConflictError)
  })

  it('should not be to register a new account with an already taken phone number', async () => {
    const conflictingPhoneNumber = '88 88888-8888'

    const user = makeUser({ phoneNumber: conflictingPhoneNumber })
    await inMemoryUsersRepository.create(user)

    expect(
      async () =>
        await sut.execute({
          name: 'John Doe',
          email: 'john@doe.com',
          password: 'password123',
          phoneNumber: conflictingPhoneNumber,
        }),
    ).rejects.toThrowError(ConflictError)
  })
})
