import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from '../application/product.service';
import { ProductDto } from '../domain/dto/product.dto';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  @ApiOperation({ summary: '상품 목록 조회' })
  @ApiResponse({ type: [ProductDto] })
  async getProducts(@Query('name') name?: string): Promise<ProductDto[]> {
    return this.productService.getProducts(name);
  }

  // @Get('/popular')
  // @ApiOperation({ summary: '인기 상품 조회' })
  // @ApiResponse({ type: [ProductDto] })
  // async getPopularProducts(): Promise<ProductDto[]> {
  //   return this.productService.getPopularProducts();
  // }

  @Get('/:id')
  @ApiOperation({ summary: '상품 조회' })
  @ApiResponse({ type: ProductDto })
  async getProduct(@Param('id') id: number): Promise<ProductDto> {
    return this.productService.getProductById(id);
  }
}