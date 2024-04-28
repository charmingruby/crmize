import { User } from '@/domain/entities/user'

export class UsersPresenters {
  static toHTTP(user: User) {
    return {
      id: user.id,
      uuid: user.uuid.toString(),
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      applicationAnsweredAt: user.applicationAnsweredAt,
      applicationStatus: user.applicationStatus,
      createdAt: user.createdAt,
      deletedAt: user.deletedAt,
      updatedAt: user.updatedAt,
    }
  }
}
