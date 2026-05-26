import { ProjectStatus } from "@prisma/client";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { ProjectView } from "@/lib/content";

export function ProjectForm({
  action,
  project,
}: {
  action: (formData: FormData) => void | Promise<void>;
  project?: ProjectView;
}) {
  return (
    <form action={action} className="grid gap-6 rounded-lg border border-white/10 bg-card/50 p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Title" name="title" defaultValue={project?.title} required />
        <Field label="SEO slug" name="slug" defaultValue={project?.slug} />
        <Field label="Client name" name="clientName" defaultValue={project?.clientName} required />
        <Field label="Client logo URL" name="clientLogo" defaultValue={project?.clientLogo ?? ""} />
        <Field label="Featured image URL" name="featuredImage" defaultValue={project?.featuredImage} required />
        <Field label="Gallery URLs, comma separated" name="gallery" defaultValue={project?.gallery.join(", ")} required />
        <Field label="Location" name="location" defaultValue={project?.location} required />
        <Field label="Timeline" name="timeline" defaultValue={project?.timeline} required />
        <Field label="Project value" name="projectValue" defaultValue={project?.projectValue} required />
        <Field label="Industry" name="industry" defaultValue={project?.industry} required />
        <div className="grid gap-2">
          <Label>Status</Label>
          <Select name="status" defaultValue={project?.status ?? "IN_PROGRESS"}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {Object.values(ProjectStatus).map((status) => (
                <SelectItem key={status} value={status}>{status.replace("_", " ")}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Field label="Services used, comma separated" name="servicesUsed" defaultValue={project?.servicesUsed.join(", ")} required />
      </div>
      <TextField label="Scope of work" name="scopeOfWork" defaultValue={project?.scopeOfWork} required />
      <TextField label="Summary" name="summary" defaultValue={project?.summary} required />
      <TextField label="Case-study body" name="body" defaultValue={project?.body} required rows={8} />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="SEO title" name="seoTitle" defaultValue={project?.seoTitle ?? ""} />
        <Field label="SEO description" name="seoDescription" defaultValue={project?.seoDescription ?? ""} />
      </div>
      <div className="flex flex-wrap gap-6 text-sm">
        <label className="flex items-center gap-2"><input name="published" type="checkbox" defaultChecked={project?.featured !== false} /> Published</label>
        <label className="flex items-center gap-2"><input name="featured" type="checkbox" defaultChecked={project?.featured} /> Featured</label>
      </div>
      <Button type="submit" className="w-fit"><Save className="size-4" /> Save Project</Button>
    </form>
  );
}

function Field(props: React.ComponentProps<typeof Input> & { label: string; name: string }) {
  const { label, name, ...inputProps } = props;
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} {...inputProps} />
    </div>
  );
}

function TextField({
  label,
  name,
  rows = 4,
  ...props
}: React.ComponentProps<typeof Textarea> & { label: string; name: string }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Textarea id={name} name={name} rows={rows} {...props} />
    </div>
  );
}

