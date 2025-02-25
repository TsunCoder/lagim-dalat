/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable } from '@nestjs/common';
import { mapToDto, mapToDtos } from '@src/common/utils/mapper.util';
import { BaseReponseDto } from '@src/core/dtos/baseResponse.dto';
import {
  IProductRepository,
  ICategoryRepository,
} from '@src/infra/repositories';
import { CreateProductDto, ProductResponseDto } from './dtos';
import { File } from '@src/infra/database/entities';

@Injectable()
export class ProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: IProductRepository,
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async getAllProduct(): Promise<BaseReponseDto<ProductResponseDto[]>> {
    const products = await this.productRepository.findAll();
    if (!products) {
      return new BaseReponseDto(false, 'Failed to get all products');
    }
    const results = mapToDtos(ProductResponseDto, products);
    return new BaseReponseDto(true, 'Get all product successfully', results);
  }

  async getProdutByName(
    name: string,
  ): Promise<BaseReponseDto<ProductResponseDto[]>> {
    const products = await this.productRepository.findListByName(name);
    const results = mapToDtos(ProductResponseDto, products);
    return new BaseReponseDto(true, 'Success', results);
  }

  async createProduct(
    productDto: CreateProductDto,
  ): Promise<BaseReponseDto<ProductResponseDto>> {
    const category = await this.categoryRepository.findById(
      productDto.categoryId,
    );

    if (!category) {
      return new BaseReponseDto(false, 'Category must be provide');
    }

    const images: File[] =
      productDto.imageUrls?.map((url) => {
        const file = new File();
        file.url = url;
        return file;
      }) || [];

    const product = await this.productRepository.create({
      productName: productDto.productName,
      description: productDto.descriptions,
      price: productDto.price,
      stock: productDto.stock,
      isActive: productDto.isActive,
      category,
      images: images,
    });

    if (!product) {
      return new BaseReponseDto(false, 'Product is invalid');
    }
    const results = mapToDto(ProductResponseDto, product);
    return new BaseReponseDto(true, 'Product added', results);
  }
}
