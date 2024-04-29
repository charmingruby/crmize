import { ResourceNotFoundError } from './resource-not-found'

describe('[UNIT] Resource Not Found Error', () => {
  it('should be able to throw successfully an error', () => {
    const err = new ResourceNotFoundError('User')

    expect(err).toBeInstanceOf(ResourceNotFoundError)
    expect(err.message).toEqual('User not found')
  })
})
