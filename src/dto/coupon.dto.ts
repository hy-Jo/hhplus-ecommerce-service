import { ApiProperty } from '@nestjs/swagger';

export class CouponDto {
  @ApiProperty({ description: '쿠폰 ID' })
  id: number;

  @ApiProperty({ description: '쿠폰 코드' })
  code: string;

  @ApiProperty({ description: '할인 금액' })
  discount_amount: number;

  @ApiProperty({ description: '쿠폰 유효 시작일' })
  valid_from: Date;

  @ApiProperty({ description: '쿠폰 유효 종료일' })
  valid_to: Date;

  @ApiProperty({ description: '총 발급 가능 수량' })
  total_quantity: number;

  @ApiProperty({ description: '남은 발급 가능 수량' })
  remaining_quantity: number;
}