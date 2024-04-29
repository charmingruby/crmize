import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { makeUser } from 'test/factories/make-user'
import { ProfileUseCase } from './profile'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { ResourceNotFoundError } from '../errors/resource-not-found'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: ProfileUseCase

describe('[UNIT] Profile Use Case', async () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new ProfileUseCase(inMemoryUsersRepository)
  })

  it('should be able to get user profile', async () => {
    const id = 1
    const uuid = new UniqueEntityId()
    const user = makeUser({}, id, uuid)

    inMemoryUsersRepository.items.push(user)

    const result = await sut.execute({ id })

    expect(result.user).toEqual(inMemoryUsersRepository.items[0])
    expect(result.user.id).toEqual(id)
    expect(result.user.uuid).toEqual(uuid)
  })

  it('should be not able to get user profile with a invalid id', async () => {
    const id = 1
    const uuid = new UniqueEntityId()
    const user = makeUser({}, id, uuid)

    inMemoryUsersRepository.items.push(user)

    expect(async () => {
      await sut.execute({ id: 2 })
    }).rejects.toThrowError(ResourceNotFoundError)
  })
})
