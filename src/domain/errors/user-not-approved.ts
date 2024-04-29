export class UserNotApprovedError extends Error {
  constructor() {
    super(`User not approved`)
  }
}
