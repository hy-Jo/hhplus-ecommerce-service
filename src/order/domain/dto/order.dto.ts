import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    @ApiProperty({ type: [Number] })
    product_ids: number[];
  
    @ApiProperty({ type: [Number] })
    quantities: number[];
  
    @ApiProperty({ required: false })
    coupon_id?: number;
  }
  
  export class OrderDto {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    total_amount: number;
  
    @ApiProperty()
    discount_amount: number;
  
    @ApiProperty()
    final_amount: number;
  
    @ApiProperty({ enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED', 'REFUNDED'] })
    status: string;
  }