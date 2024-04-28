import { User } from '@/domain/entities/user'
import { UsersRepository } from '@/domain/repositories/users-repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaUserMapper } from '../mappers/prisma-user-mapper'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findByUUID(uuid: string) {
    const user = await this.prisma.user.findUnique({
      where: { uuid },
    })

    if (!user) {
      return null
    }

    return PrismaUserMapper.toDomain(user)
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return null
    }

    return PrismaUserMapper.toDomain(user)
  }

  async findByPhoneNumber(phoneNumber: string) {
    const user = await this.prisma.user.findUnique({
      where: { phoneNumber },
    })

    if (!user) {
      return null
    }

    return PrismaUserMapper.toDomain(user)
  }

  async create(user: User) {
    await this.prisma.user.create({
      data: {
        uuid: user.uuid.toString(),
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        password: user.password,
        applicationStatus: user.applicationStatus.toString(),
        applicationAnsweredAt: user.applicationAnsweredAt,
        deletedAt: user.deletedAt,
      },
    })
  }
}
