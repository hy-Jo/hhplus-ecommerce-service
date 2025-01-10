import { Module } from '@nestjs/common';
import { ProductController } from './presentation/product.controller';
import { ProductService } from './application/product.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
})
export class ProductModule {}