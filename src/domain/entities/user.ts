import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface UserProps {
  name: string
  email: string
  phoneNumber: string
  role: string
  password: string
  deletedBy?: UniqueEntityId
  settedUpAt?: Date | null
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

  get settetUpAt() {
    return this.props.settedUpAt
  }

  set settetUpAt(settetUpAt: Date) {
    this.props.settedUpAt = settetUpAt
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(
    props: Optional<UserProps, 'createdAt'>,
    id?: number,
    uuid?: UniqueEntityId,
  ) {
    const user = new User(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
      uuid,
    )
    return user
  }
}
