import { Controller, Post, Get, Body, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CouponDto } from 'src/dto/coupon.dto';

@ApiTags('coupons')
@Controller('coupons')
export class CouponController {
  @Get('/')
  @ApiOperation({ summary: '사용 가능한 쿠폰 목록 조회' })
  @ApiResponse({ 
    status: 200,
    description: '사용 가능한 쿠폰 목록',
    type: [CouponDto] 
  })
  getCoupons() {}

  @Post('/issue')
  @ApiOperation({ summary: '쿠폰 발급 (선착순)' })
  @ApiResponse({ 
    status: 201,
    description: '쿠폰 발급 성공',
    type: CouponDto 
  })
  @ApiResponse({ 
    status: 400,
    description: '쿠폰 수량 소진' 
  })
  issueCoupon(@Body() data: { user_id: number }) {}

  @Get('/my')
  @ApiOperation({ summary: '내 쿠폰 목록 조회' })
  @ApiResponse({ 
    status: 200,
    description: '사용자의 보유 쿠폰 목록',
    type: [CouponDto] 
  })
  getMyCoupons(@Query('user_id') userId: number) {}

  @Get('/:id')
  @ApiOperation({ summary: '쿠폰 상세 정보 조회' })
  @ApiResponse({ 
    status: 200,
    description: '쿠폰 상세 정보',
    type: CouponDto 
  })
  getCouponById(@Param('id') id: number) {}
}