
import * as fs from "fs";
import { MySqlContainer } from "@testcontainers/mysql";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const init = async () => {
  await Promise.all([initMysql()]);
};

const initMysql = async () => {
  const mysql = await new MySqlContainer("mysql:8")
    .withDatabase("ecommerce")
    .withUser("root")
    .withRootPassword("root")
    .start();

  global.mysql = mysql;

  process.env.DATABASE_URL = `mysql://root:root@${mysql.getHost}:${mysql.getPort}/${mysql.getDatabase}`;

  prisma = await new PrismaClient();
  await prisma.$connect();
  await insertTestData(prisma);
};

const insertTestData = async (datasource: PrismaClient) => {
  const importSql = fs.readFileSync("./test/it/import.sql").toString();
  for (const sql of importSql.split(";").filter((s) => s.trim() !== "")) {
    await prisma.$executeRawUnsafe(sql);
  }
};

export default init;
