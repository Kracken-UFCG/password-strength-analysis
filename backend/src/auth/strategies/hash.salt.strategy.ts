import { randomBytes, createHash } from 'crypto';
import { HashStrategy } from './hash.strategy';

export class HashSaltStrategy implements HashStrategy {
  async hash(password: string): Promise<string> {
    const salt = randomBytes(16).toString('hex');

    const hash = createHash('sha256')
      .update(password + salt)
      .digest('hex');

    return `${salt}:${hash}`;
  }
}
