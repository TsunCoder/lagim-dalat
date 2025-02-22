import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Iphone', description: 'Product' })
  @IsNotEmpty()
  @IsString()
  productName: string;

  @ApiProperty({ example: 'No description', description: 'Description' })
  @IsString()
  descriptions?: string;

  @ApiProperty({ example: 10000, description: 'Price' })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ example: 10, description: 'Stock' })
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean = true;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imageUrls?: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  categoryId: string;
}
