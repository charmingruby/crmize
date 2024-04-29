import { User } from '@/domain/entities/user'
import { UsersRepository } from '@/domain/repositories/users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async save(user: User): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === user.id)
    this.items[itemIndex] = user
  }

  async create(user: User) {
    this.items.push(user)
  }

  async findById(id: number) {
    const user = this.items.find((item) => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async findByPhoneNumber(phoneNumber: string) {
    const user = this.items.find((item) => item.phoneNumber === phoneNumber)

    if (!user) {
      return null
    }

    return user
  }

  async findByUUID(uuid: string) {
    const user = this.items.find((item) => item.uuid.toString() === uuid)

    if (!user) {
      return null
    }

    return user
  }
}
