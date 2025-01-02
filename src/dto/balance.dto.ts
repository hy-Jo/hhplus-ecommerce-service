import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { BalanceTransactionDto } from './BalanceTransactionDto';

@ApiTags('balance')
@Controller('balance')
export class BalanceController {
  @Post('/charge')
  @ApiOperation({ summary: '잔액 충전' })
  @ApiResponse({ type: BalanceTransactionDto })
  chargeBalance(@Body() data: BalanceTransactionDto) {}

  @Get('/')
  @ApiOperation({ summary: '잔액 조회' })
  @ApiResponse({ type: UserDto })
  getBalance() {}

  @Get('/transactions')
  @ApiOperation({ summary: '거래 내역 조회' })
  @ApiResponse({ type: [BalanceTransactionDto] })
  getTransactions() {}
}