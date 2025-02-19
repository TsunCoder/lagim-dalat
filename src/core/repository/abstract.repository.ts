import { BaseEntity } from '@core/entities/base.entity';
import { Injectable } from '@nestjs/common';
import { IRepository } from './interface.repository';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

@Injectable()
export class AbstractRepository<T extends BaseEntity>
  implements IRepository<T>
{
  private repository: Repository<T>;
  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  public async create(data: DeepPartial<T>): Promise<T> {
    return await this.repository.save(data);
  }

  public async createMany(data: DeepPartial<T>[]): Promise<T[]> {
    return await this.repository.save(data);
  }

  public async findAll(options: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }

  public async findById(id: string): Promise<T> {
    if (id === undefined || id === null) {
      throw new Error('Id is invalid');
    }
    const options: FindOptionsWhere<T> = { id: id } as FindOptionsWhere<T>;
    const entity = await this.repository.findOneBy(options);
    if (!entity) {
      throw new Error('Entity not found');
    }
    return entity;
  }

  public async findByCondition(condition: FindOneOptions<T>): Promise<T> {
    const entity = await this.repository.findOne(condition);
    if (!entity) {
      throw new Error('Entity not found');
    }
    return entity;
  }

  public async update(id: string, data: DeepPartial<T>): Promise<T> {
    const entity = await this.repository.preload({ id, ...data });
    if (!entity) {
      throw new Error('Entity not found');
    }
    return await this.repository.save(entity);
  }

  public async remove(id: string): Promise<T> {
    const entity = await this.findById(id);
    if (!entity) {
      throw new Error('Entity not found');
    }
    return this.repository.remove(entity);
  }
}
