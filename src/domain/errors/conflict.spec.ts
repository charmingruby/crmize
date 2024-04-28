import { ConflictError } from './conflict'

describe('[UNIT] Conflict Error', () => {
  it('should be able to throw successfully an error', () => {
    const field = 'dummy field'
    const err = new ConflictError(field)

    expect(err).toBeInstanceOf(ConflictError)
    expect(err.message).toEqual(`${field} is already taken.`)
  })
})
