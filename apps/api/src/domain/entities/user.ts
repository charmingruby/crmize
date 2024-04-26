import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface UserProps {
  name: string
  email: string
  phoneNumber: string
  role: string
  password: string
  deletedBy?: UniqueEntityId
  createdAt: Date
  updatedAt?: Date | null
}

export class User extends CoreEntity<UserProps> {
  get name() {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get email() {
    return this.props.email
  }

  set email(email: string) {
    this.props.email = email
  }

  get phoneNumber() {
    return this.props.phoneNumber
  }

  set phoneNumber(phoneNumber: string) {
    this.props.phoneNumber = phoneNumber
  }

  get role() {
    return this.props.role
  }

  set role(role: string) {
    this.props.role = role
  }

  get password() {
    return this.props.password
  }

  set password(password: string) {
    this.props.password = password
  }

  get deletedBy() {
    return this.props.deletedBy
  }

  set deletedBy(deletedBy: UniqueEntityId) {
    this.props.deletedBy = deletedBy
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: UserProps, id?: number, uuid?: UniqueEntityId) {
    const user = new User(props, id, uuid)
    return user
  }
}