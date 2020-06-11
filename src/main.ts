import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common'



async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    logger : ['error', 'warn']
  });

  const option = new DocumentBuilder()
    .setTitle('Ordering Server')
    .setDescription('Ordering server describtion')
    .setVersion('1.0')
    .addTag('Order server')
    .build()
  const document = SwaggerModule.createDocument(app, option)
  SwaggerModule.setup('api', app, document)
  const configService = app.get(ConfigService)
  const port = configService.get('PORT')
  Logger.debug('testing')
  await app.listen(port);
  
}
bootstrap();
