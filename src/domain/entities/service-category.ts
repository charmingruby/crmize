import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface ServiceCategoryProps {
  name: string
  description: string
  createdAt: Date
  updatedAt?: Date | null
}

export class ServiceCategory extends CoreEntity<ServiceCategoryProps> {
  static create(
    props: ServiceCategoryProps,
    id?: number,
    uuid?: UniqueEntityId,
  ) {
    const servicecategory = new ServiceCategory(props, id, uuid)
    return servicecategory
  }
}