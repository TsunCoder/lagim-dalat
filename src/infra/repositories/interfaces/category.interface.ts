import { IRepository } from '@src/core/repository/interface.repository';
import { Category } from '@src/infra/database/entities/category.entity';

export interface ICategoryRepository extends IRepository<Category> {
  findById(id: string): Promise<Category>;
}
