import { ProfileUseCase } from '@/domain/use-cases/profile'
import { CurrentUser } from '@/infra/auth/decorators/current-user.decorator'
import { Controller, HttpCode, Post } from '@nestjs/common'

@Controller('/me')
export class ProfileController {
  constructor(private profileUseCase: ProfileUseCase) {}

  @Post()
  @HttpCode(200)
  async handle(@CurrentUser() userId: number) {
    const { user } = await this.profileUseCase.execute({ id: userId })
    return { user }
  }
}
