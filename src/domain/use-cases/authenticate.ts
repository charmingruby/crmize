import { Injectable } from '@nestjs/common'
import { EncryptService } from '../cryptography/encrypt'
import { HashService } from '../cryptography/hash'
import { InvalidCredentialsError } from '../errors/invalid-credentials'
import { UserNotApprovedError } from '../errors/user-not-approved'
import { UsersRepository } from '../repositories/users-repository'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  accessToken: string
}

@Injectable()
export class AuthenticateUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashService: HashService,
    private encryptService: EncryptService,
  ) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new InvalidCredentialsError()
    }

    const isPasswordValid = await this.hashService.compare(
      user.password,
      password,
    )
    if (!isPasswordValid) {
      throw new InvalidCredentialsError()
    }

    if (user.applicationStatus !== 'ACCEPTED') {
      throw new UserNotApprovedError()
    }
    const payload = {
      sub: user.id,
      role: user.role as string,
    }

    const accessToken = await this.encryptService.encrypt(payload)

    return {
      accessToken,
    }
  }
}
