import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { Building2 } from "lucide-react";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = { title: "Admin Login" };

async function login(formData: FormData) {
  "use server";

  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) redirect("/login?error=CredentialsSignin");
    throw error;
  }
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md border-white/10 bg-card/70">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-md border border-primary/25 bg-primary/10">
            <Building2 className="size-6 text-primary" />
          </div>
          <CardTitle>Dockside CMS Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={login} className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit">Sign in</Button>
          </form>
          <LoginError searchParams={searchParams} />
        </CardContent>
      </Card>
    </main>
  );
}

async function LoginError({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  if (!params.error) return null;
  return <p className="mt-4 text-sm text-destructive">Invalid credentials or database not configured.</p>;
}

