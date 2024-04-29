import { Module } from '@nestjs/common'
import { HttpModule } from './http/http.module'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from './auth/guards/auth.guard'

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
