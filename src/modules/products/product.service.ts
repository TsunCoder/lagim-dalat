/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { BaseReponseDto } from '@src/core/dtos/baseResponse.dto';
import { Product } from '@src/infra/database/entities/product.entity';
import { IProductRepository } from '@src/infra/repositories/interfaces/products.interface';
import { ProductResponseDto } from './dtos/product.dto';
import { mapToDtos } from '@src/common/utils/mapper.util';

@Injectable()
export class ProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: IProductRepository,
  ) {}

  async getProdutByName(
    name: string,
  ): Promise<BaseReponseDto<ProductResponseDto[]>> {
    const products = await this.productRepository.findListByName(name);
    const results = mapToDtos(ProductResponseDto, products);
    return new BaseReponseDto(true, 'Success', results);
  }
}
