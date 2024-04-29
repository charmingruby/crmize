import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  InternalServerErrorException,
  Post,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { RegisterUseCase } from '@/domain/use-cases/register'
import { ConflictError } from '@/domain/errors/conflict'
import { Public } from '@/infra/auth/decorators/public.decorator'

const registerBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  password: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(registerBodySchema)

type RegisterBodySchema = z.infer<typeof registerBodySchema>

@Controller('/sign-up')
export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  @Public()
  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationPipe) body: RegisterBodySchema) {
    try {
      const { name, email, phoneNumber, password } = body

      await this.registerUseCase.execute({ name, email, phoneNumber, password })
    } catch (err) {
      if (err instanceof ConflictError) {
        throw new ConflictException(err.message)
      }

      throw new InternalServerErrorException(err.message)
    }
  }
}
