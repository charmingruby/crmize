export abstract class EncryptService {
  abstract encrypt(payload: Record<string, unknown>): Promise<string>
}
