import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ProductDto } from '../domain/dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts(name?: string): Promise<ProductDto[]> {
    const products = await this.prisma.product.findMany({
      where: name ? { name: { contains: name } } : {},
    });
    return products.map(product => new ProductDto());
  }

//   async getPopularProducts(): Promise<ProductDto[]> {
//     const popularProducts = await this.prisma.product.findMany({
//       orderBy: {
//         popular_products: {
//             count: 'desc',
//         },
//       },
//       take: 10, // 예시로 상위 10개의 인기 상품을 가져옵니다.
//     });
//     return popularProducts.map(product => new ProductDto());
//   }

  async getProductById(id: number): Promise<ProductDto> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new Error('Product not found');
    }
    return new ProductDto();
  }
}