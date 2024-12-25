"use server";

import { AddQuestionFormData } from "@/components/add-question-form";
import { Difficulty } from "@/lib/types";
import { prisma } from "@/prisma/prisma-instant";
import { revalidatePath } from "next/cache";

export async function AddQuestionFormSubmit(formData: AddQuestionFormData) {
  const question = {
    title: formData.title as string,
    difficulty: formData.difficulty as Difficulty,
    url: formData.url as string,
    categoryId: parseInt(formData.category_id as string),
    dataStructureId: parseInt(formData.data_structure_id as string),
  };
  try {
    await prisma.question.create({
      data: question,
    });
    revalidatePath("/dashboard");
  } catch (err) {
    console.error(err);
  }
}

export async function AddCategoryFormSubmit(formData: FormData) {
  const category = {
    name: formData.get("name") as string,
    description: formData.get("desctiption") as string | null,
  };
  try {
    await prisma.category.create({
      data: category,
    });
    revalidatePath("/dashboard");
  } catch (err) {
    console.error(err);
  }
}

export async function AddDataStructureFormSubmit(formData: FormData) {
  const dataStructure = {
    name: formData.get("name") as string,
    description: formData.get("desctiption") as string | null,
  };
  try {
    await prisma.dataStructure.create({
      data: dataStructure,
    });
    revalidatePath("/dashboard");
  } catch (err) {
    console.error(err);
  }
}
