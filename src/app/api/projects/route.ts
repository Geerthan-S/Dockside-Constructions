import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { canUseDatabase, getPrisma } from "@/lib/prisma";
import { seedProjects } from "@/lib/content";

export async function GET() {
  if (!canUseDatabase()) return NextResponse.json(seedProjects);
  const projects = await getPrisma().project.findMany({ include: { testimonial: true } });
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!canUseDatabase()) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const body = await request.json();
  const project = await getPrisma().project.create({ data: { ...body, authorId: session.user.id } });
  return NextResponse.json(project, { status: 201 });
}

