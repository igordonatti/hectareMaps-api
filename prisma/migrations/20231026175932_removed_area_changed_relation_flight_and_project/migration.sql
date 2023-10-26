/*
  Warnings:

  - You are about to drop the column `area_id` on the `flight` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `flight` table. All the data in the column will be lost.
  - You are about to drop the column `flight_id` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `plan` table. All the data in the column will be lost.
  - You are about to drop the column `flight_id` on the `service` table. All the data in the column will be lost.
  - You are about to drop the `area` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `projectId` on table `flight` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `flightId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `flight` DROP FOREIGN KEY `Flight_area_id_fkey`;

-- DropForeignKey
ALTER TABLE `flight` DROP FOREIGN KEY `Flight_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `flight` DROP FOREIGN KEY `Flight_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_flight_id_fkey`;

-- DropForeignKey
ALTER TABLE `plan` DROP FOREIGN KEY `Plan_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `service` DROP FOREIGN KEY `Service_flight_id_fkey`;

-- AlterTable
ALTER TABLE `flight` DROP COLUMN `area_id`,
    DROP COLUMN `user_id`,
    MODIFY `projectId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `image` DROP COLUMN `flight_id`,
    ADD COLUMN `flightId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `plan` DROP COLUMN `user_id`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `project` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `service` DROP COLUMN `flight_id`;

-- DropTable
DROP TABLE `area`;

-- CreateTable
CREATE TABLE `_FlightToService` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FlightToService_AB_unique`(`A`, `B`),
    INDEX `_FlightToService_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flight` ADD CONSTRAINT `Flight_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_flightId_fkey` FOREIGN KEY (`flightId`) REFERENCES `Flight`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Plan` ADD CONSTRAINT `Plan_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FlightToService` ADD CONSTRAINT `_FlightToService_A_fkey` FOREIGN KEY (`A`) REFERENCES `Flight`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FlightToService` ADD CONSTRAINT `_FlightToService_B_fkey` FOREIGN KEY (`B`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
