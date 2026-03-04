import { createHash } from 'crypto';
import { HashStrategy } from './hash.strategy';

export class NoKdfStrategy implements HashStrategy {
  async hash(password: string): Promise<string> {
    return createHash('sha256')
      .update(password)
      .digest('hex');
  }
}
