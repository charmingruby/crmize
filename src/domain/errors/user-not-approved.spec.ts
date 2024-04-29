import { UserNotApprovedError } from './user-not-approved'

describe('[UNIT] Invalid Credentials Error', () => {
  it('should be able to throw successfully an error', () => {
    const err = new UserNotApprovedError()

    expect(err).toBeInstanceOf(UserNotApprovedError)
    expect(err.message).toEqual(`User not approved`)
  })
})
