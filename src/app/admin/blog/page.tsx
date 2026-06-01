import { createPost } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { requireAdmin } from "@/lib/admin";
import { getPosts } from "@/lib/repositories";

export const metadata = { title: "Articles CMS" };

export default async function AdminBlogPage() {
  await requireAdmin();
  const posts = await getPosts();

  return (
    <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
      <div>
        <h1 className="text-3xl font-semibold">Articles CMS</h1>
        <p className="mt-2 text-muted-foreground">
          Keep longer-form company articles here. The main public navigation now points to testimonials.
        </p>
        <div className="mt-8 grid gap-3">
          {posts.map((post) => (
            <div key={post.id} className="rounded-md border border-white/10 bg-card/45 p-4">
              <p className="font-medium">{post.title}</p>
              <p className="text-sm text-muted-foreground">{post.category}</p>
            </div>
          ))}
        </div>
      </div>
      <form action={createPost} className="grid gap-4 rounded-lg border border-white/10 bg-card/45 p-6">
        <div className="grid gap-2"><Label>Title</Label><Input name="title" required /></div>
        <div className="grid gap-2"><Label>Slug</Label><Input name="slug" /></div>
        <div className="grid gap-2"><Label>Category</Label><Input name="category" required /></div>
        <div className="grid gap-2"><Label>Cover image URL</Label><Input name="coverImage" required /></div>
        <div className="grid gap-2"><Label>Excerpt</Label><Textarea name="excerpt" required /></div>
        <div className="grid gap-2"><Label>Body</Label><Textarea name="body" rows={8} required /></div>
        <Button type="submit">Create Post</Button>
      </form>
    </div>
  );
}
