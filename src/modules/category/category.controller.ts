import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
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
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    const result = await this.categoryService.addCategory(createCategoryDto);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }
}
