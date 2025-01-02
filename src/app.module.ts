import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { CouponController } from "./controllers/coupon.controller";
import { BalanceController } from "./controllers/balance.controller";
import { OrderController } from "./controllers/order.controller";
import { PaymentController } from "./controllers/payment.controller";
import { ProductController } from "./controllers/product.controller";
import { UserController } from "./controllers/userController";

@Module({
  imports: [DatabaseModule],
  controllers: [CouponController, BalanceController, OrderController, PaymentController, ProductController, UserController],
  providers: [],
})
export class AppModule {}
