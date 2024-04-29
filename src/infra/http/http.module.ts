import { Module } from '@nestjs/common'
import { HealthCheckController } from './controllers/health-check.controller'
import { RegisterController } from './controllers/register.controller'
import { DatabaseModule } from '../database/database.module'
import { RegisterUseCase } from '@/domain/use-cases/register'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { AuthenticateUseCase } from '@/domain/use-cases/authenticate'
import { AuthenticateController } from './controllers/authenticate.controller'
import { AuthModule } from '../auth/auth.module'
import { ProfileController } from './controllers/profile.controller'
import { ProfileUseCase } from '@/domain/use-cases/profile'

@Module({
  imports: [CryptographyModule, DatabaseModule, AuthModule],
  providers: [AuthenticateUseCase, RegisterUseCase, ProfileUseCase],
  controllers: [
    AuthenticateController,
    HealthCheckController,
    ProfileController,
    RegisterController,
  ],
})
export class HttpModule {}
