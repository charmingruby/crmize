import { randomUUID } from 'node:crypto'

export class UniqueEntityId {
  private _uuid: string

  toString() {
    return this._uuid
  }

  toValue() {
    return this._uuid
  }

  constructor(uuid?: string) {
    this._uuid = uuid ?? randomUUID()
  }
}
