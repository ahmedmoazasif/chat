import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = app.get(ConfigService).get('PORT');
  await app.listen(PORT || 3000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
