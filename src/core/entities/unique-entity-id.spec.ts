import { randomUUID } from 'crypto'
import { UniqueEntityId } from './unique-entity-id'

describe('[UNIT] Unique Entity Id', () => {
  it('should be able to generate a new unique entity id', () => {
    const uuid = new UniqueEntityId()
    expect(uuid.toString().length).toBeGreaterThan(1)
  })

  it('should be able to generate a new unique entity id with a value param', () => {
    const uuidAsParam = randomUUID()
    const uuid = new UniqueEntityId(uuidAsParam)
    expect(uuid.toString()).toEqual(uuidAsParam)
  })
})
