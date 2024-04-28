import { Module } from '@nestjs/common'
import { HealthCheckController } from './controllers/health-check.controller'
import { RegisterController } from './controllers/register.controller'
import { DatabaseModule } from '../database/database.module'
import { RegisterUseCase } from '@/domain/use-cases/register'
import { CryptographyModule } from '../cryptography/cryptography.module'

@Module({
  imports: [CryptographyModule, DatabaseModule],
  providers: [RegisterUseCase],
  controllers: [HealthCheckController, RegisterController],
})
export class HttpModule {}
