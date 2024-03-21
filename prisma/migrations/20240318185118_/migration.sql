/*
  Warnings:

  - You are about to drop the column `nameService` on the `service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `service` DROP COLUMN `nameService`,
    ADD COLUMN `serviceType` VARCHAR(191) NOT NULL DEFAULT '';
