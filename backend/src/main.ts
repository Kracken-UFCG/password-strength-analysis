import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { runWorker } from './password_generator/passwordSeeder';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
async function generatePasswords() {

  const pwdOne = await runWorker(1, 1000);
  const pwdTwo = await runWorker(2, 3000);
  const pwdThree = await runWorker(3, 100);
  const pwdFour = await runWorker(4, 400);
  const pwdFive = await runWorker(5, 400);


  function saveCsv(level: number, passwords: string[]) {
    const header = 'password\n';
    const body = passwords.join('\n');
    writeFileSync(`passwords_level_${level}.csv`, header + body);
  }

  saveCsv(1, pwdOne);
  saveCsv(2, pwdTwo);
  saveCsv(3, pwdThree);
  saveCsv(4, pwdFour);
  saveCsv(5, pwdFive)
}


generatePasswords();