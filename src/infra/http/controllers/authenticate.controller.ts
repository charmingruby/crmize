import {
  Body,
  Controller,
  HttpCode,
  InternalServerErrorException,
  Post,
  UnauthorizedException,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { AuthenticateUseCase } from '@/domain/use-cases/authenticate'
import { UserNotApprovedError } from '@/domain/errors/user-not-approved'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials'
import { Public } from '@/infra/auth/decorators/public.decorator'

const authenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(authenticateBodySchema)

type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>

@Controller('/sign-in')
export class AuthenticateController {
  constructor(private authenticateUseCase: AuthenticateUseCase) {}

  @Public()
  @Post()
  @HttpCode(200)
  async handle(@Body(bodyValidationPipe) body: AuthenticateBodySchema) {
    try {
      const { accessToken } = await this.authenticateUseCase.execute({
        email: body.email,
        password: body.password,
      })

      return { accessToken }
    } catch (err) {
      if (err instanceof InvalidCredentialsError) {
        throw new UnauthorizedException(err.message)
      }

      if (err instanceof UserNotApprovedError) {
        throw new UnauthorizedException(err.message)
      }

      throw new InternalServerErrorException(err.message)
    }
  }
}
