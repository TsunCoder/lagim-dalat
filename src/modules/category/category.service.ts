import { Inject, Injectable } from '@nestjs/common';
import { BaseReponseDto } from '@src/core/dtos/baseResponse.dto';
import { ICategoryRepository } from '@src/infra/repositories';
import { CategoryResponseDto } from './dtos';
import { CreateCategoryDto } from './dtos/createCategory.dto';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async getAllCategory(): Promise<BaseReponseDto<CategoryResponseDto[]>> {
    const results = await this.categoryRepository.findAll();
    if (!results) {
      return new BaseReponseDto(false, 'Failed to get all categories');
    }

    return new BaseReponseDto(true, 'Get all categories successfully', results);
  }

  async addCategory(
    categoryDto: CreateCategoryDto,
  ): Promise<BaseReponseDto<CategoryResponseDto>> {
    const category = await this.categoryRepository.create({
      name: categoryDto.name,
      description: categoryDto.description,
    });
    if (!category) {
      return new BaseReponseDto(false, 'Failed to create category');
    }
    return new BaseReponseDto(true, 'Create category sucessfully', category);
  }
}
