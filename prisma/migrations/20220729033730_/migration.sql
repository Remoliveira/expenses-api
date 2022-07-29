/*
  Warnings:

  - You are about to drop the column `data` on the `Expense` table. All the data in the column will be lost.
  - Changed the type of `value` on the `Expense` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "data",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "value",
ADD COLUMN     "value" INTEGER NOT NULL;
