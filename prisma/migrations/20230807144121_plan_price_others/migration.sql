/*
  Warnings:

  - You are about to drop the column `other_data` on the `area` table. All the data in the column will be lost.
  - You are about to drop the column `other_data` on the `flight` table. All the data in the column will be lost.
  - You are about to drop the column `other_data` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `other_data` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `other_data` on the `service` table. All the data in the column will be lost.
  - Added the required column `months_of_validity` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `area` DROP COLUMN `other_data`;

-- AlterTable
ALTER TABLE `flight` DROP COLUMN `other_data`;

-- AlterTable
ALTER TABLE `image` DROP COLUMN `other_data`;

-- AlterTable
ALTER TABLE `plan` ADD COLUMN `months_of_validity` INTEGER NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `project` DROP COLUMN `other_data`;

-- AlterTable
ALTER TABLE `service` DROP COLUMN `other_data`;
