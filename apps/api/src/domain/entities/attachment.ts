import { CoreEntity } from '@/core/entities/core-entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export interface AttachmentProps {
  title: string
  url: string
}

export class Attachment extends CoreEntity<AttachmentProps> {
  get title() {
    return this.props.title
  }

  get url() {
    return this.props.url
  }

  static create(props: AttachmentProps, id?: number, uuid?: UniqueEntityId) {
    const attachment = new Attachment(props, id, uuid)
    return attachment
  }
}
