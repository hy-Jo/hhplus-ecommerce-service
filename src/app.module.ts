import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { CouponController } from "./coupon/presentation/coupon.controller";
import { BalanceController } from "./balance/presentation/balance.controller";
import { OrderController } from "./order/presentation/order.controller";
import { PaymentController } from "./payment/presentation/payment.controller";
import { ProductController } from "./product/presentation/product.controller";
import { UserController } from "./user/presentation/userController";

@Module({
  imports: [DatabaseModule],
  controllers: [CouponController, BalanceController, OrderController, PaymentController, ProductController, UserController],
  providers: [],
})
export class AppModule {}
