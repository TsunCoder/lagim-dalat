import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { LoggingModule } from './logging/logging.module';

@Module({
  imports: [ConfigModule, LoggingModule],
  exports: [ConfigModule, LoggingModule],
})
export class CoreModule {}
