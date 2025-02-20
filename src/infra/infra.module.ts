import { Module } from '@nestjs/common';
import { LoggingModule } from './logging/logging.module';
import { DatabaseModule } from './database/database.module';
import { CoreModule } from '@core/core.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [CoreModule, LoggingModule, DatabaseModule, RepositoriesModule],
  exports: [LoggingModule, DatabaseModule, RepositoriesModule],
})
export class InfraModule {}
