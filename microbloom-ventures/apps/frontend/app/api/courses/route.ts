// app/api/courses/route.ts  (Next.js App Router server route)
import { NextResponse } from "next/server";
import { prisma } from "@/server/lib/prisma"; // your existing prisma singleton
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function POST(req: Request) {
  const body = await req.json();
  const { title, slug, description, fees } = body;

  const course = await prisma.course.create({
    data: { title, slug, description, fees },
  });

  // Notify Postgres (so socket server receives it)
  const payload = JSON.stringify({ id: course.id, slug: course.slug, title: course.title });
  await pool.query("NOTIFY course_events, $1", [payload]);

  return NextResponse.json(course);
}
