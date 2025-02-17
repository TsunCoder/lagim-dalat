import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function swaggerConfig(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Lagim Dalat API')
    .setDescription('API for Lagim Dalat')
    .setVersion('1.0')
    .addTag('Lagim Dalat')
    // .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
}
