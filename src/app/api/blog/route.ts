import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { seedPosts } from "@/lib/content";
import { canUseDatabase, getPrisma } from "@/lib/prisma";

export async function GET() {
  if (!canUseDatabase()) return NextResponse.json(seedPosts);
  return NextResponse.json(await getPrisma().post.findMany({ orderBy: { updatedAt: "desc" } }));
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!canUseDatabase()) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const post = await getPrisma().post.create({ data: { ...(await request.json()), authorId: session.user.id } });
  return NextResponse.json(post, { status: 201 });
}

