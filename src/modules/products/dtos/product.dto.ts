export class ProductResponseDto {
  id: string;
  productName: string;
  description?: string;
  price: number;
  stock: number;
  category: { id: string; name: string };
  images: string[];
  isActive: boolean;
}
