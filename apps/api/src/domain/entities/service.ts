import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface ServiceProps {}

export class Service extends CoreEntity<ServiceProps> {
  static create(props: ServiceProps, id?: number, uuid?: UniqueEntityId) {
    const service = new Service(props, id, uuid)
    return service
  }
}
