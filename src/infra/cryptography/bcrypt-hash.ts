import { compare, hash } from 'bcryptjs'
import { HashService } from '@/domain/cryptography/hash'
import { Injectable } from '@nestjs/common'

@Injectable()
export class BcryptHashService implements HashService {
  private HASH_SALT_LENGTH = 8

  hash(plain: string) {
    return hash(plain, this.HASH_SALT_LENGTH)
  }

  compare(hash: string, password: string) {
    return compare(password, hash)
  }
}
