import { User } from '@/domain/entities/user'
import { UsersRepository } from '@/domain/repositories/users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  items: User[] = []

  async findByUUID(uuid: string): Promise<User> {
    throw new Error('Method not implemented.')
  }

  async create(user: User): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
