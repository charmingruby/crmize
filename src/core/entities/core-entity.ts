import { UniqueEntityId } from './unique-entity-id'

export abstract class CoreEntity<Props> {
  private _id: number
  private _uuid: UniqueEntityId
  protected props: Props

  get id() {
    return this._id
  }

  set id(id: number) {
    this._id = id
  }

  get uuid() {
    return this._uuid
  }

  constructor(props: Props, id: number, uuid: UniqueEntityId) {
    this._id = id
    this._uuid = uuid ?? new UniqueEntityId()
    this.props = props
  }
}
