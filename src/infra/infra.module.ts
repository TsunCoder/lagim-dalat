import { Module } from '@nestjs/common';
import { LoggingModule } from './logging/logging.module';
import { DatabaseModule } from './database/database.module';
import { CoreModule } from '@core/core.module';

@Module({
  imports: [CoreModule, LoggingModule, DatabaseModule],
  exports: [LoggingModule, DatabaseModule],
})
export class InfraModule {}
