import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface ChangelogProps {
  name: string
  status: string
  description: string
  createdAt: Date
  updatedAt?: Date | null
}
export class Changelog extends CoreEntity<ChangelogProps> {
  static create(props: ChangelogProps, id?: number, uuid?: UniqueEntityId) {
    const changelog = new Changelog(props, id, uuid)
    return changelog
  }
}
