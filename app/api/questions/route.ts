import { prisma } from "@/prisma/prisma-instant";
import { NextResponse } from "next/server";
import * as Queries from "@prisma/client/sql";

export async function POST(req: Request) {
  const { categoryId, userId } = await req.json();
  if (!userId || !categoryId) {
    return NextResponse.json(
      { message: "User ID/Category ID is required" },
      { status: 400 }
    );
  }
  try {
    const questions = await prisma.$queryRawTyped(
      Queries.getQuestionsForCategory(userId, categoryId)
    );
    return NextResponse.json(questions, { status: 200 });
  } catch (error) {
    console.error("Error getting questions:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
