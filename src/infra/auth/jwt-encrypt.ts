import { EncryptService } from '@/domain/cryptography/encrypt'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { env } from '../env'

@Injectable()
export class JwtEncryptService implements EncryptService {
  constructor(private jwtService: JwtService) {}

  async encrypt(payload: Record<string, unknown>) {
    return this.jwtService.signAsync(payload, {
      secret: env.JWT_SECRET,
    })
  }
}
