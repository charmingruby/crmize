import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface ServicePaymentProps {
  price: number
  method: string
  parcels: number
  currentParcel: number
  parcelPrice: number
  status: string
  serviceId: UniqueEntityId
  createdAt: Date
  updatedAt?: Date | null
}

export class ServicePayment extends CoreEntity<ServicePaymentProps> {
  static create(
    props: ServicePaymentProps,
    id?: number,
    uuid?: UniqueEntityId,
  ) {
    const payment = new ServicePayment(props, id, uuid)
    return payment
  }
}
