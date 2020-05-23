import { NestFactory } from '@nestjs/core';

import { ClassValidatorPipe } from './@shared/class-validator/class-validator.pipe';

export const prefix = 'microservice-prefix';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(new ClassValidatorPipe());
  await app.listen(3000);
}
bootstrap();
