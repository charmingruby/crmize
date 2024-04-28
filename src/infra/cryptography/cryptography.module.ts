import { Module } from '@nestjs/common'
import { BcryptHashService } from './bcrypt-hash'
import { HashService } from '@/domain/cryptography/hash'

@Module({
  providers: [{ provide: HashService, useClass: BcryptHashService }],
  exports: [HashService],
})
export class CryptographyModule {}
