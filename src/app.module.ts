import { ProductService } from './modules/products/product.service';
import { Module } from '@nestjs/common';

// Controllers

// Services

// Modules
import { CoreModule } from '@core/core.module';
import { InfraModule } from '@infra/infra.module';

@Module({
  imports: [CoreModule, CoreModule, InfraModule],
  providers: [ProductService],
  exports: [],
})
export class AppModule {}
