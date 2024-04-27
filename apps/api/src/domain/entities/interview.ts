import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface InterviewProps {
  notes: string
  interviewDate: Date
  customerId: UniqueEntityId
  serviceId: UniqueEntityId
  createdAt: Date
  updatedAt?: Date | null
}

export class Interview extends CoreEntity<InterviewProps> {
  static create(props: InterviewProps, id?: number, uuid?: UniqueEntityId) {
    const interview = new Interview(props, id, uuid)
    return interview
  }
}
