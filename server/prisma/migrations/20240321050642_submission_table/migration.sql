/*
  Warnings:

  - You are about to drop the `Snippet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Snippet`;

-- CreateTable
CREATE TABLE `Submission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `language` VARCHAR(191) NOT NULL,
    `stdin` VARCHAR(191) NULL,
    `sourceCode` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
