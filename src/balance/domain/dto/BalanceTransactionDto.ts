import { ApiProperty } from '@nestjs/swagger';

export class BalanceTransactionDto {
  @ApiProperty({ description: '거래 ID' })
  id: number;

  @ApiProperty({ description: '사용자 ID' })
  user_id: number;

  @ApiProperty({ description: '거래 금액' })
  amount: number;

  @ApiProperty({ 
    description: '거래 유형',
    enum: ['CHARGE', 'PAYMENT', 'REFUND'],
    example: 'CHARGE'
  })
  transaction_type: string;

  @ApiProperty({ 
    description: '거래 설명',
    required: false,
    example: '잔액 충전'
  })
  description?: string;

  @ApiProperty({ 
    description: '거래 일시',
    type: 'string',
    format: 'date-time' 
  })
  created_at: Date;
}
