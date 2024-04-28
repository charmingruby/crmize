import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export type UserRole = 'APPLICANT' | 'MANAGER'
export type ApplicationStatus = 'PENDING' | 'DENIED' | 'ACCEPTED'

export interface UserProps {
  name: string
  email: string
  phoneNumber: string
  role: UserRole
  password: string
  applicationStatus: ApplicationStatus
  createdAt: Date
  applicationAnsweredAt?: Date | null
  deletedAt?: Date | null
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

  set role(role: UserRole) {
    this.props.role = role
  }

  get password() {
    return this.props.password
  }

  set password(password: string) {
    this.props.password = password
  }

  get applicationStatus() {
    return this.props.applicationStatus
  }

  set applicationStatus(applicationStatus: ApplicationStatus) {
    this.props.applicationStatus = applicationStatus
  }

  get applicationAnsweredAt() {
    return this.props.applicationAnsweredAt
  }

  set applicationAnsweredAt(applicationAnsweredAt: Date) {
    this.props.applicationAnsweredAt = applicationAnsweredAt
  }

  get deletedAt() {
    return this.props.deletedAt
  }

  set deletedAt(deletedAt: Date) {
    this.props.deletedAt = deletedAt
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(
    props: Optional<UserProps, 'applicationStatus' | 'createdAt'>,
    id?: number,
    uuid?: UniqueEntityId,
  ) {
    const user = new User(
      {
        ...props,
        applicationStatus: props.applicationStatus ?? 'PENDING',
        applicationAnsweredAt: props.applicationAnsweredAt ?? null,
        deletedAt: props.deletedAt ?? null,
        updatedAt: props.updatedAt ?? null,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
      uuid,
    )
    return user
  }
}
