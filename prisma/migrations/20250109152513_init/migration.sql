/*
  Warnings:

  - You are about to drop the column `transaction_type` on the `balancetransaction` table. All the data in the column will be lost.
  - Added the required column `status` to the `BalanceTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `balancetransaction` DROP COLUMN `transaction_type`,
    ADD COLUMN `status` ENUM('DEPOSIT', 'USED') NOT NULL;
