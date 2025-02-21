import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { BaseReponseDto } from '@core/dtos/baseResponse.dto';
import { CategoryResponseDto } from './dtos';
import { CreateCategoryDto } from './dtos/createCategory.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategory(): Promise<BaseReponseDto<CategoryResponseDto[]>> {
    const categories = await this.categoryService.getAllCategory();
    return categories;
  }

  @Post()
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    return await this.categoryService.addCategory(categoryDto);
  }
}
