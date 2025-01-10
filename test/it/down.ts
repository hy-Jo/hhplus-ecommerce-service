import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const down = async () => {
  await global.mysql.stop();
  await prisma.$disconnect();
};

export default down;
