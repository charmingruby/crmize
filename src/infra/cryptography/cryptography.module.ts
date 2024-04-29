import { Module } from '@nestjs/common'

import { HashService } from '@/domain/cryptography/hash'

import { BcryptHashService } from './bcrypt-hash'

@Module({
  providers: [{ provide: HashService, useClass: BcryptHashService }],
  exports: [HashService],
})
export class CryptographyModule {}
