import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('E-Commerce Order Service API')
    .setDescription('E-Commerce 주문 서비스 API 문서')
    .setVersion('1.0')
    .addTag('users', '사용자 관리')
    .addTag('balance', '잔액 관리')
    .addTag('products', '상품 관리')
    .addTag('orders', '주문 관리')
    .addTag('payments', '결제 관리')
    .addTag('coupons', '쿠폰 관리')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3300);
}
bootstrap();
