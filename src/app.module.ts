import { ProductService } from './modules/products/product.service';
import { Module } from '@nestjs/common';

// Controllers

// Services

// Modules
import { CoreModule } from '@core/core.module';
import { InfraModule } from '@infra/infra.module';
import { ProductModule } from './modules/products/product.module';

@Module({
  imports: [CoreModule, CoreModule, InfraModule, ProductModule],
  providers: [ProductService],
  exports: [],
})
export class AppModule {}
