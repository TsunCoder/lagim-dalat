import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { BaseReponseDto } from '@src/core/dtos/baseResponse.dto';
import { CreateProductDto, ProductResponseDto } from './dtos';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProduct(): Promise<BaseReponseDto<ProductResponseDto[]>> {
    const result = await this.productService.getAllProduct();
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Get('search')
  async getProductByName(
    @Query('name') name: string,
  ): Promise<BaseReponseDto<ProductResponseDto[]>> {
    try {
      const result = await this.productService.getProdutByName(name);
      if (!result.success) {
        throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
      }
      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      throw new HttpException(
        'Unknow error occurred',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    const result = await this.productService.createProduct(createProductDto);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }
}
