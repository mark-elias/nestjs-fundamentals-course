import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
// validation pipe
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // validation pipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
