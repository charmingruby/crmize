import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface PersonaProps {
  name: string
  description: string
  customerId: UniqueEntityId
  createdAt: Date
  updatedAt?: Date | null
}

export class Persona extends CoreEntity<PersonaProps> {
  static create(props: PersonaProps, id?: number, uuid?: UniqueEntityId) {
    const persona = new Persona(props, id, uuid)
    return persona
  }
}
