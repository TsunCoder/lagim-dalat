import { IRepository } from '@src/core/repository/interface.repository';
import { Product } from '@src/infra/database/entities/product.entity';

export interface IProductRepository extends IRepository<Product> {
  // Add here your custom methods for this repository
  // A method to find a product by name
  findListByName(name: string): Promise<Product[]>;
  // A method to list all products by category id
  listByCategoryId(id: string): Promise<Product[]>;
  // A method to list all products by category name
  listByCategoryName(name: string): Promise<Product[]>;
  // A method to add a product
  addProduct(product: Product): Promise<Product>;
  // A method to update a product
  updateProduct(id: string, product: Product): Promise<Product>;
  // A method to delete a product
  deleteProduct(id: string): Promise<Product>;
}
