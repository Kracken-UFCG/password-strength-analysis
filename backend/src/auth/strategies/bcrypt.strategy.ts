import * as bcrypt from 'bcrypt';
import { HashStrategy } from './hash.strategy';

export class BcryptStrategy implements HashStrategy {
  constructor(private readonly rounds: number) {}

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.rounds);
  }
}
