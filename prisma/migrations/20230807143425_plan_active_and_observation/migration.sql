/*
  Warnings:

  - You are about to drop the column `other_data` on the `plan` table. All the data in the column will be lost.
  - Added the required column `active` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observation` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plan` DROP COLUMN `other_data`,
    ADD COLUMN `active` VARCHAR(191) NOT NULL,
    ADD COLUMN `observation` VARCHAR(191) NOT NULL;
