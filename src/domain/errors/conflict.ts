export class ConflictError extends Error {
  constructor(field: string) {
    super(`${field} is already taken`)
  }
}
