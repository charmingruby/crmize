import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { ApplicationStatus, User, UserRole } from '@/domain/entities/user'
import { Prisma, User as PrismaUser } from '@prisma/client'

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create(
      {
        name: raw.name,
        email: raw.email,
        password: raw.password,
        phoneNumber: raw.phoneNumber,
        role: raw.role as UserRole,
        applicationAnsweredAt: raw.applicationAnsweredAt,
        applicationStatus: raw.applicationStatus as ApplicationStatus,
        createdAt: raw.createdAt,
        deletedAt: raw.deletedAt,
        updatedAt: raw.updatedAt,
      },
      raw.id,
      new UniqueEntityId(raw.uuid),
    )
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id,
      uuid: user.uuid.toString(),
      name: user.name,
      email: user.email,
      password: user.password,
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
