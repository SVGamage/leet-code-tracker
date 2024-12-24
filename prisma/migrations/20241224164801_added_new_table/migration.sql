-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "data_structure_id" INTEGER;

-- CreateTable
CREATE TABLE "DataStructure" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DataStructure_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_data_structure_id_fkey" FOREIGN KEY ("data_structure_id") REFERENCES "DataStructure"("id") ON DELETE SET NULL ON UPDATE CASCADE;
