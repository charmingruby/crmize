import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { EncryptService } from '@/domain/cryptography/encrypt'
import { JwtEncryptService } from './jwt-encrypt'
import { env } from '../env'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      signOptions: {
        expiresIn: '7d',
        algorithm: 'HS256',
      },
      secret: env.JWT_SECRET,
    }),
  ],
  providers: [{ provide: EncryptService, useClass: JwtEncryptService }],
  exports: [EncryptService],
})
export class AuthModule {}
