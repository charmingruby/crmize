import { InvalidCredentialsError } from './invalid-credentials'

describe('[UNIT] Invalid Credentials Error', () => {
  it('should be able to throw successfully an error', () => {
    const err = new InvalidCredentialsError()

    expect(err).toBeInstanceOf(InvalidCredentialsError)
    expect(err.message).toEqual(`Invalid credentials`)
  })
})
