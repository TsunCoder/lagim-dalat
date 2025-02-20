import { AbstractRepository } from '@src/core/repository/abstract.repository';
import { Product } from '@infra/database/entities/product.entity';
import { IProductRepository } from '../interfaces/products.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

export class ProductRepository
  extends AbstractRepository<Product>
  implements IProductRepository
{
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    super(productRepository);
  }

  async findListByName(name: string): Promise<Product[]> {
    if (!name.trim()) {
      throw new Error('The name must be provided');
    }
    const product = await this.findListByCondition({
      where: { productName: ILike(`%${name}`) },
    });
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async listByCategoryId(categoryId: string): Promise<Product[]> {
    return await this.findListByCondition({
      where: { category: { id: categoryId } },
    });
  }

  async listByCategoryName(name: string): Promise<Product[]> {
    return await this.findListByCondition({
      where: { category: { name: name } },
    });
  }

  async addProduct(product: Product): Promise<Product> {
    return this.create(product);
  }

  async updateProduct(id: string, product: Product): Promise<Product> {
    if (!id) {
      return await this.update(id, product);
    }
    throw new Error('Product id must be provided');
  }

  async deleteProduct(id: string): Promise<Product> {
    if (!id) {
      return await this.remove(id);
    }
    throw new Error('Product id is invalid');
  }
}
