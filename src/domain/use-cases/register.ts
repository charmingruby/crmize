import { Injectable } from '@nestjs/common'
import { UsersRepository } from '../repositories/users-repository'
import { User } from '../entities/user'
import { ConflictError } from '../errors/conflict'
import { HashService } from '../cryptography/hash'

interface RegisterUseCaseRequest {
  name: string
  email: string
  phoneNumber: string
  password: string
}

interface RegisterUseCaseResponse {
  user: User
}

@Injectable()
export class RegisterUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private cryptography: HashService,
  ) {}

  async execute({
    name,
    email,
    password,
    phoneNumber,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const isEmailAvailable = await this.usersRepository.findByEmail(email)
    const isPhoneNumberAvailable =
      await this.usersRepository.findByPhoneNumber(phoneNumber)

    if (isEmailAvailable) {
      throw new ConflictError('email')
    }

    if (isPhoneNumberAvailable) {
      throw new ConflictError('phone number')
    }

    const passwordHash = await this.cryptography.hash(password)

    const user = User.create({
      name,
      email,
      password: passwordHash,
      phoneNumber,
      role: 'APPLICANT',
    })

    await this.usersRepository.create(user)

    return { user }
  }
}
