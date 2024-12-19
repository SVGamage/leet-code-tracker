import { prisma } from "@/prisma/prisma-instant";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  const { email } = params;
  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }
  try {
    const user: User | null = await prisma.user.findUnique({
      where: { email: decodeURIComponent(email) },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error getting user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
