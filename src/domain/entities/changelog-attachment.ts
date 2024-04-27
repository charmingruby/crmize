import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface ChangelogAttachmentProps {
  changelogId: UniqueEntityId
  attachmentId: UniqueEntityId
  createdAt: Date
  updatedAt?: Date | null
}
export class ChangelogAttachment extends CoreEntity<ChangelogAttachmentProps> {
  static create(
    props: ChangelogAttachmentProps,
    id?: number,
    uuid?: UniqueEntityId,
  ) {
    const attachment = new ChangelogAttachment(props, id, uuid)
    return attachment
  }
}
