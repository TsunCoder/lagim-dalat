import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product, Category } from '@infra/database/entities';
import { ProductRepository, CategoryRepository } from './';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  providers: [
    {
      provide: 'ICategoryRepository',
      useClass: CategoryRepository,
    },
    {
      provide: 'IProductRepository',
      useClass: ProductRepository,
    },
  ],
  exports: ['IProductRepository', 'ICategoryRepository'],
})
export class RepositoriesModule {}
