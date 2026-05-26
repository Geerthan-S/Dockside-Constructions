import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const email = process.env.SEED_ADMIN_EMAIL ?? "admin@docksideconstructions.com";
const password = process.env.SEED_ADMIN_PASSWORD ?? "DocksideAdmin#2026";

async function main() {
  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: { passwordHash, role: "SUPER_ADMIN" },
    create: {
      name: "Dockside Super Admin",
      email,
      passwordHash,
      role: "SUPER_ADMIN",
    },
  });

  console.log(`Seeded SUPER_ADMIN user: ${email}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
