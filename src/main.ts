import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const prefix= 'microservice-prefix';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(prefix);
  await app.listen(3000);
}
bootstrap();
