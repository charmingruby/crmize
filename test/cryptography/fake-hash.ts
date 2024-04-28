import { HashService } from '@/domain/cryptography/hash'

export class FakeHashService implements HashService {
  generateFakeHash(plain: string): string {
    return `${plain}-hash`
  }

  async hash(plain: string): Promise<string> {
    return this.generateFakeHash(plain)
  }

  async compare(hash: string, password: string): Promise<boolean> {
    return this.generateFakeHash(password) === hash
  }
}
