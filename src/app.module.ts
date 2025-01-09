import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CouponController } from './coupon/presentation/coupon.controller';
import { BalanceController } from './balance/presentation/balance.controller';
import { OrderController } from './order/presentation/order.controller';
import { PaymentController } from './payment/presentation/payment.controller';
import { UserController } from './user/presentation/user.controller';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [CouponController, BalanceController, OrderController, PaymentController, UserController],
  providers: [],
})
export class AppModule {}