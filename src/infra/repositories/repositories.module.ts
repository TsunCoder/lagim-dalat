import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../database/entities/product.entity';
import { ProductRepository } from './implementions/products.repository';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [
    {
      provide: 'IProductRepository',
      useClass: ProductRepository,
    },
  ],
  exports: ['IProductRepository'],
})
export class RepositoriesModule {}
