import { Expose } from 'class-transformer';

export class ProductResponseDto {
  @Expose()
  id: string;

  @Expose()
  productName: string;

  @Expose()
  description?: string;

  @Expose()
  price: number;

  @Expose()
  stock: number;

  @Expose()
  category: { id: string; name: string };

  @Expose()
  images: string[];

  @Expose()
  isActive: boolean;
}
