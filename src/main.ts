import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app-module/app-module.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9000);
}
bootstrap();
