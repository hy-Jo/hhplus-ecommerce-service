import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductDto } from '../dto/product.dto';

@ApiTags('products')
@Controller('products')
export class ProductController {
  @Get('/')
  @ApiOperation({ summary: '상품 목록 조회' })
  @ApiResponse({ type: [ProductDto] })
  getProducts() {}

  @Get('/popular')
  @ApiOperation({ summary: '인기 상품 조회' })
  @ApiResponse({ type: [ProductDto] })
  getPopularProducts() {}
}
