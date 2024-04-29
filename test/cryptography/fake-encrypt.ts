import { EncryptService } from '@/domain/cryptography/encrypt'

export class FakeEncryptService implements EncryptService {
  async encrypt(payload: Record<string, unknown>): Promise<string> {
    return JSON.stringify(payload)
  }
}
