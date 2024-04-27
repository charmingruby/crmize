import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface CustomerProps {
  name: string
  lastName: string
  email: string
  phoneNumber: string
  job: string
  deletedBy?: UniqueEntityId
  createdAt: Date
  updatedAt?: Date | null
}

export class Customer extends CoreEntity<CustomerProps> {
  get name() {
    return this.props.name
  }

  get lastName() {
    return this.props.lastName
  }

  get email() {
    return this.props.email
  }

  get phoneNumber() {
    return this.props.phoneNumber
  }

  get job() {
    return this.props.job
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

  static create(props: CustomerProps, id?: number, uuid?: UniqueEntityId) {
    const customer = new Customer(props, id, uuid)
    return customer
  }
}
