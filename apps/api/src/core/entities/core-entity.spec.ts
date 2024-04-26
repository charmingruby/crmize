import { CoreEntity } from './core-entity'
import { UniqueEntityId } from './unique-entity-id'

interface ExampleEntityProps {
  description: string
}

class ExampleEntiy extends CoreEntity<ExampleEntityProps> {
  get description() {
    return this.props.description
  }

  static create(props: ExampleEntityProps, id?: number, uuid?: UniqueEntityId) {
    const example = new ExampleEntiy(props, id, uuid)
    return example
  }
}

describe('[UNIT] Core Entity', () => {
  it('should be able to inherit the core entity', () => {
    const props: ExampleEntityProps = { description: 'dummy description' }
    const id = 1
    const uuid = new UniqueEntityId()

    const exampleEntity = ExampleEntiy.create(props, id, uuid)

    expect(exampleEntity.description).toEqual(props.description)
    expect(exampleEntity.uuid.toString()).toEqual(uuid.toString())
    expect(exampleEntity.id).toEqual(id)
  })
})
