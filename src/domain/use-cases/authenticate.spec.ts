import { FakeEncryptService } from 'test/cryptography/fake-encrypt'
import { AuthenticateUseCase } from './authenticate'
import { FakeHashService } from 'test/cryptography/fake-hash'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { makeUser } from 'test/factories/make-user'
import { InvalidCredentialsError } from '../errors/invalid-credentials'

let inMemoryUsersRepository: InMemoryUsersRepository
let hashService: FakeHashService
let encryptService: FakeEncryptService
let sut: AuthenticateUseCase

describe('[UNIT] Authenticate Use Case', async () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    hashService = new FakeHashService()
    encryptService = new FakeEncryptService()
    sut = new AuthenticateUseCase(
      inMemoryUsersRepository,
      hashService,
      encryptService,
    )
  })

  it('should be able to authenticate an user with valid credentials', async () => {
    const password = 'password123'
    const hashedPassword = await hashService.hash(password)

    const user = makeUser({
      password: hashedPassword,
      applicationStatus: 'ACCEPTED',
      applicationAnsweredAt: new Date(),
    })

    inMemoryUsersRepository.items.push(user)

    const result = await sut.execute({
      email: user.email,
      password,
    })

    expect(result.accessToken).toEqual(expect.any(String))
  })

  it('should be not able to authenticate an user with an email not registered', async () => {
    const password = 'password123'
    const hashedPassword = await hashService.hash(password)

    const user = makeUser({
      email: 'john@doe.com',
      password: hashedPassword,
      applicationStatus: 'ACCEPTED',
      applicationAnsweredAt: new Date(),
    })

    inMemoryUsersRepository.items.push(user)

    expect(async () => {
      await sut.execute({
        email: 'dummy@email.com',
        password,
      })
    }).rejects.toThrowError(InvalidCredentialsError)
  })

  it('should be not able to authenticate an user with an invalid password', async () => {
    const password = 'password123'
    const hashedPassword = await hashService.hash(password)

    const user = makeUser({
      password: hashedPassword,
      applicationStatus: 'ACCEPTED',
      applicationAnsweredAt: new Date(),
    })

    inMemoryUsersRepository.items.push(user)

    expect(async () => {
      await sut.execute({
        email: user.email,
        password: 'wrong-password',
      })
    }).rejects.toThrowError(InvalidCredentialsError)
  })

  it('should be not able to authenticate a not accepted user', async () => {
    const password = 'password123'
    const hashedPassword = await hashService.hash(password)

    const pendingUser = makeUser({
      email: 'pedinguser@email.com',
      password: hashedPassword,
      applicationStatus: 'PENDING',
      applicationAnsweredAt: new Date(),
    })

    const deniedUser = makeUser({
      email: 'denieduser@email.com',
      password: hashedPassword,
      applicationStatus: 'DENIED',
      applicationAnsweredAt: new Date(),
    })

    inMemoryUsersRepository.items.push(pendingUser)
    inMemoryUsersRepository.items.push(deniedUser)

    expect(async () => {
      await sut.execute({
        email: deniedUser.email,
        password: 'wrong-password',
      })
    }).rejects.toThrowError(InvalidCredentialsError)

    expect(async () => {
      await sut.execute({
        email: pendingUser.email,
        password: 'wrong-password',
      })
    }).rejects.toThrowError(InvalidCredentialsError)
  })
})
