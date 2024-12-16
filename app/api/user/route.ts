import { prisma } from "@/prisma/prisma-instant";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, userId } = await req.json();
  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }
  try {
    const user: User = await prisma.user.upsert({
      where: { email },
      update: { userId },
      create: { email, userId },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error upserting user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
