import { AbstractRepository } from '@src/core/repository/abstract.repository';
import { Category } from '@infra/database/entities/category.entity';
import { ICategoryRepository } from '../interfaces/category.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class CategoryRepository
  extends AbstractRepository<Category>
  implements ICategoryRepository
{
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {
    super(categoryRepository);
  }

  async findById(id: string): Promise<Category> {
    if (!id) {
      throw new Error('The name must be provided');
    }
    const product = await this.findByCondition({
      where: { id: id },
    });
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }
}
