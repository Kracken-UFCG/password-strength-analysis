import { HashStrategy } from './strategies/hash.strategy';
import { NoKdfStrategy } from './strategies/no-kdf.strategy';
import { BcryptStrategy } from './strategies/bcrypt.strategy';
import { HashSaltStrategy } from './strategies/hash.salt.strategy';

export class Factory {
  static create(mode: string): HashStrategy {
    switch (mode) {
      case 'no-kdf':
        return new NoKdfStrategy();

      case 'bcrypt-10':
        return new BcryptStrategy(10);

      case 'bcrypt-12':
        return new BcryptStrategy(12);

      case 'bcrypt-14':
        return new BcryptStrategy(14);

      case 'hash-salt':
        return new HashSaltStrategy();

      default:
        throw new Error('Invalid hashing mode');
    }
  }
}
