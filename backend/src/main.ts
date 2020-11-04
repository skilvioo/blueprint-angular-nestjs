
import * as dotenv from 'dotenv';
import * as helmet from 'helmet';
dotenv.config({ path: `${process.cwd()}/.env` });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
