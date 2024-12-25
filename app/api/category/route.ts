import { prisma } from "@/prisma/prisma-instant";
import { Category } from "@prisma/client";
import { NextResponse } from "next/server";
import * as Queries from "@prisma/client/sql";

export async function POST(req: Request) {
  const { userId } = await req.json();
  if (!userId) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }
  try {
    const categories = await prisma.$queryRawTyped(
      Queries.getAllCategories(userId)
    );
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error getting user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error getting user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
