import { Module } from '@nestjs/common';

// Controllers

// Services

// Modules
import { CoreModule } from '@core/core.module';
import { InfraModule } from '@infra/infra.module';
import {
  ProductModule,
  CategoryModule,
  CategoryService,
  ProductService,
} from './modules';

@Module({
  imports: [CoreModule, CoreModule, InfraModule, ProductModule, CategoryModule],
  providers: [ProductService, CategoryService],
  exports: [],
})
export class AppModule {}
