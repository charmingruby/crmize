import { Injectable } from '@nestjs/common'
import { UsersRepository } from '../repositories/users-repository'
import { User } from '../entities/user'
import { ResourceNotFoundError } from '../errors/resource-not-found'

interface ProfileUseCaseRequest {
  id: number
}

interface ProfileUseCaseResponse {
  user: User
}

@Injectable()
export class ProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    id,
  }: ProfileUseCaseRequest): Promise<ProfileUseCaseResponse> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new ResourceNotFoundError('User')
    }

    return { user }
  }
}
