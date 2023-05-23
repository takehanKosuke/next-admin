import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  console.log("================");
  console.log(request.blob);
  const users = await prisma.user
    .findMany
    // where: {
    //   id: request.params.userId
    // }
    ();

  return NextResponse.json(users);
}
