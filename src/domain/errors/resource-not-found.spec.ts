import { ResourceNotFoundError } from './resource-not-found'

describe('[UNIT] Resource Not Found Error', () => {
  it('should be able to throw successfully an error', () => {
    const err = new ResourceNotFoundError()

    expect(err).toBeInstanceOf(ResourceNotFoundError)
    expect(err.message).toEqual('Resource not found.')
  })
})
