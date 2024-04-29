import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { User, UserProps } from '@/domain/entities/user'
import { faker } from '@faker-js/faker'

export function makeUser(
  override: Partial<UserProps>,
  id?: number,
  uuid?: UniqueEntityId,
) {
  const user = User.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      role: 'APPLICANT',
      applicationStatus: 'PENDING',
      password: faker.internet.password(),
      ...override,
    },
    id,
    uuid,
  )

  return user
}
