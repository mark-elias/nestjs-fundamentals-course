import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
// validation pipe
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips out unwanted/invalid properties
      forbidNonWhitelisted: true, // stops a request from being processed if any NON whitelisted properties are present; throws an error
      transform: true, // turns the plain body into a real DTO instance and converts types
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
