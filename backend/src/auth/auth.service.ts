import { Injectable } from '@nestjs/common';
import { Factory } from './factory';

@Injectable()
export class AuthService {
  async hashPassword(password: string, mode: string) {
    const strategy = Factory.create(mode);
    const start = performance.now();
    const hash = await strategy.hash(password);
    const end = performance.now();

    return {
      mode,
      hash,
      timeMs: end - start,
    };
  }
}
