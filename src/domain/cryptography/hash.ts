export abstract class HashService {
  abstract hash(plain: string): Promise<string>
  abstract compare(hash: string, password: string): Promise<boolean>
}
