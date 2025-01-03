import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateOrderDto, OrderDto } from 'src/dto/order.dto';
;
@ApiTags('orders')
@Controller('orders')
export class OrderController {
  @Post('/')
  @ApiOperation({ summary: '주문 생성' })
  @ApiResponse({ type: OrderDto })
  createOrder(@Body() data: CreateOrderDto) {}
}

