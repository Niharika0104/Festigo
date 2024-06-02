-- AlterTable
ALTER TABLE "Vendor" ADD COLUMN     "OrderType" TEXT NOT NULL DEFAULT 'Product',
ADD COLUMN     "budget" TEXT NOT NULL DEFAULT '400';
