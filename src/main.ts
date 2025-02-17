import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from './common/swagger/swagger.config';
import { ConfigService } from '@nestjs/config';
import { LoggingService } from './core/logging/logging.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // APP CONFIG
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);
  const nodeEnv = configService.get<string>('NODE_ENV', 'development');
  swaggerConfig(app);

  const logger = app.get(LoggingService);
  app.useLogger(logger);

  logger.log('🚀 App is starting...');
  await app.listen(port);
  logger.log(
    `🚀 Server is running on http://localhost:${port} in ${nodeEnv} mode`,
  );
  logger.log(`📜 Swagger docs available at http://localhost:${port}/api/docs`);
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
