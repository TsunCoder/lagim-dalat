import { Inject, Injectable } from '@nestjs/common';
import { BaseReponseDto } from '@src/core/dtos/baseResponse.dto';
import { ICategoryRepository } from '@src/infra/repositories';
import { CategoryResponseDto } from './dtos';
import { CreateCategoryDto } from './dtos/createCategory.dto';
import { mapToDto, mapToDtos } from '@src/common/utils/mapper.util';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async getAllCategory(): Promise<BaseReponseDto<CategoryResponseDto[]>> {
    const categories = await this.categoryRepository.findAll();
    if (!categories) {
      return new BaseReponseDto(false, 'Failed to get all categories');
    }
    const results = mapToDtos(CategoryResponseDto, categories);
    return new BaseReponseDto(true, 'Get all categories successfully', results);
  }

  async addCategory(
    categoryDto: CreateCategoryDto,
  ): Promise<BaseReponseDto<CategoryResponseDto>> {
    const existCategory = await this.categoryRepository.findByCondition({
      where: { name: categoryDto.name },
    });

    if (!existCategory) {
      const category = await this.categoryRepository.create({
        name: categoryDto.name,
        description: categoryDto.description,
      });

      if (!category) {
        return new BaseReponseDto(false, 'Failed to create category');
      }
      const results = mapToDto(CategoryResponseDto, category);

      return new BaseReponseDto(true, 'Create category sucessfully', results);
    }
    return new BaseReponseDto(false, 'Category existed');
  }
}
