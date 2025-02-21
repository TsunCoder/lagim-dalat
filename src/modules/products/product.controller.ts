import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { BaseReponseDto } from '@src/core/dtos/baseResponse.dto';
import { ProductResponseDto } from './dtos';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('search')
  async getProductByName(
    @Query('name') name: string,
  ): Promise<BaseReponseDto<ProductResponseDto[]>> {
    const products = await this.productService.getProdutByName(name);
    return products;
  }
}
