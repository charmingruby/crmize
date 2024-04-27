import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface InterviewProps {}

export class Interview extends CoreEntity<InterviewProps> {
  static create(props: InterviewProps, id?: number, uuid?: UniqueEntityId) {
    const interview = new Interview(props, id, uuid)
    return interview
  }
}
