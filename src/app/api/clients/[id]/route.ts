import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { canUseDatabase, getPrisma } from "@/lib/prisma";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!canUseDatabase()) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const { id } = await params;
  return NextResponse.json(await getPrisma().client.update({ where: { id }, data: await request.json() }));
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user || !["SUPER_ADMIN", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!canUseDatabase()) return NextResponse.json({ error: "Database not configured" }, { status: 503 });

  const { id } = await params;
  await getPrisma().client.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
