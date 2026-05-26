import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { seedClients } from "@/lib/content";
import { canUseDatabase, getPrisma } from "@/lib/prisma";

export async function GET() {
  if (!canUseDatabase()) return NextResponse.json(seedClients);
  return NextResponse.json(await getPrisma().client.findMany({ orderBy: { updatedAt: "desc" } }));
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!canUseDatabase()) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  return NextResponse.json(await getPrisma().client.create({ data: await request.json() }), { status: 201 });
}

