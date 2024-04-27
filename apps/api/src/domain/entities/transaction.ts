import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface TransactionProps {}

export class Transaction extends CoreEntity<TransactionProps> {
  static create(props: TransactionProps, id?: number, uuid?: UniqueEntityId) {
    const transaction = new Transaction(props, id, uuid)
    return transaction
  }
}
