import { prisma } from "@/prisma/prisma-instant";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const dataStructures = await prisma.dataStructure.findMany();
    return NextResponse.json(dataStructures, { status: 200 });
  } catch (error) {
    console.error("Error getting user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
