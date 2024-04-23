import { Module } from '@nestjs/common'
import { PrismaService } from './infra/database/prisma/prisma.service'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './infra/env/env'
import { EnvModule } from './infra/env/env.module'
import { HealthCheckController } from './infra/http/health-check.controller'

@Module({
  providers: [PrismaService],
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
  ],
  controllers: [HealthCheckController],
})
export class AppModule {}
