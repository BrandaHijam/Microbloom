// app/api/services/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/server/lib/prisma";

export async function GET() {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, slug: true, title: true, description: true }
  });
  return NextResponse.json(services);
}
