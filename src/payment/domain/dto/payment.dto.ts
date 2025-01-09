import { ApiProperty } from '@nestjs/swagger';

export class PaymentDto {
    @ApiProperty()
    order_id: number;
  
    @ApiProperty()
    amount: number;
  
    @ApiProperty({ enum: ['BALANCE', 'CARD', 'TRANSFER'] })
    payment_method: string;
  
    @ApiProperty({ enum: ['PENDING', 'COMPLETED', 'FAILED', 'REFUNDED'] })
    status: string;
  }