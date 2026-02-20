import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { runWorker } from './password_generator/passwordSeeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

async function generatePasswords() {

  const passwordsLevelOne = await runWorker(1, 100);
  console.log(`Level 1`);
  console.log(passwordsLevelOne);

  const passwordsLevelTwo = await runWorker(2, 100);
  console.log(`Level 2`);
  console.log(passwordsLevelTwo);

  const passwordsLevelThree = await runWorker(3, 100);
  console.log(`Level 3`);
  console.log(passwordsLevelThree);

  const passwordsLevelFour = await runWorker(4, 100);
  console.log(`Level 4`);
  console.log(passwordsLevelFour);

  const passwordsLevelFive = await runWorker(5, 100);
  console.log(`Level 5`);
  console.log(passwordsLevelFive);

  const passwordsLevelSix = await runWorker(6, 100);
  console.log(`Level 6`);
  console.log(passwordsLevelSix);

}