import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PaymentDto } from "src/dto/payment.dto";

@ApiTags('payments')
@Controller('payments')
export class PaymentController {
  @Post('/')
  @ApiOperation({ summary: '결제 처리' })
  @ApiResponse({ type: PaymentDto })
  processPayment(@Body() data: PaymentDto) {}
}