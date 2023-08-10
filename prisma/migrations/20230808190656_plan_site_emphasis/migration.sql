/*
  Warnings:

  - Added the required column `site_emphasis` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plan` ADD COLUMN `site_emphasis` BOOLEAN NOT NULL;
