import { DeepPartial, FindManyOptions } from 'typeorm';

export interface IRepository<T> {
  create(data: DeepPartial<T>): Promise<T>;
  createMany(data: DeepPartial<T>[]): Promise<T[]>;
  findById(id: string): Promise<T>;
  findAll(options: FindManyOptions<T>): Promise<T[]>;
  findByCondition(condition: any): Promise<T>;
  update(id: string, data: DeepPartial<T>): Promise<T>;
  remove(id: string): Promise<T>;
}
