import { User } from '../entities/user'

export abstract class UsersRepository {
  abstract findByUUID(uuid: string): Promise<User | null>
  abstract findByEmail(email: string): Promise<User | null>
  abstract findByPhoneNumber(phoneNumber: string): Promise<User | null>
  abstract create(user: User): Promise<void>
}
