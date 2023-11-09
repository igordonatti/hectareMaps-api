/*
  Warnings:

  - You are about to drop the `plan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `plan` DROP FOREIGN KEY `Plan_userId_fkey`;

-- DropTable
DROP TABLE `plan`;
