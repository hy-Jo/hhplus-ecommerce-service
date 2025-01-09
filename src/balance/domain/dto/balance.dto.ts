import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../../../user/domain/dto/user.dto';
import { BalanceTransactionDto } from './BalanceTransactionDto';

@ApiTags('balance')
export class BalanceController {
  @ApiOperation({ summary: '잔액 충전' })
  @ApiResponse({ type: BalanceTransactionDto })
  chargeBalance(@Body() data: BalanceTransactionDto) {}

  @ApiOperation({ summary: '잔액 조회' })
  @ApiResponse({ type: UserDto })

  @ApiOperation({ summary: '거래 내역 조회' })
  @ApiResponse({ type: [BalanceTransactionDto] })
  getTransactions() {}
}