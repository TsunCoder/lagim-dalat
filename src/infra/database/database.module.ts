import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from '@core/config/config.module';
import { AppConfigService } from '@core/config/config.service';
import { DatabaseTypeEnum } from '@core/enums/databaseType.enum';

@Module({
  imports: [
    AppConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (configService: AppConfigService) => ({
        type: configService.databaseType as DatabaseTypeEnum,
        host: configService.databaseHost,
        port: configService.databasePort,
        username: configService.databaseUser,
        password: configService.databasePassword,
        database: configService.databaseName,
        entities: [__dirname + '/../*.entity{.ts,.js}'],
        synchronize: false,
      }),
      inject: [AppConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
