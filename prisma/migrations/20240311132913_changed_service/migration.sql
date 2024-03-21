/*
  Warnings:

  - You are about to drop the column `service_type` on the `service` table. All the data in the column will be lost.
  - Added the required column `created` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameService` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `service` DROP COLUMN `service_type`,
    ADD COLUMN `created` DATETIME(3) NOT NULL,
    ADD COLUMN `nameService` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;
