import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('balance')
@Controller('balance')
export class BalanceController {
  @Post('/charge')
  chargeBalance(@Body() data: { amount: number }) {
    // 잔액 충전
  }

  @Get('/')
  getBalance(@Query('user_id') userId: number) {
    // 잔액 조회
  }

  @Get('/history')
  getBalanceHistory(@Query('user_id') userId: number) {
    // 잔액 변동 내역 조회
  }
}
