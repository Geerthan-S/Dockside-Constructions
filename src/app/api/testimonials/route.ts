import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { seedProjects } from "@/lib/content";
import { canUseDatabase, getPrisma } from "@/lib/prisma";

export async function GET() {
  if (!canUseDatabase()) {
    return NextResponse.json(seedProjects.flatMap((project) => project.testimonial ? [project.testimonial] : []));
  }
  return NextResponse.json(await getPrisma().testimonial.findMany({ orderBy: { updatedAt: "desc" } }));
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!canUseDatabase()) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  return NextResponse.json(await getPrisma().testimonial.create({ data: await request.json() }), { status: 201 });
}

