"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import type { ProjectView } from "@/lib/content";

export function FeaturedProjectsCarousel({ projects }: { projects: ProjectView[] }) {
  const [index, setIndex] = useState(0);
  const activeProjects = useMemo(() => {
    if (projects.length <= 3) return projects;
    return [0, 1, 2].map((offset) => projects[(index + offset) % projects.length]);
  }, [index, projects]);

  return (
    <div>
      <div className="mb-6 flex justify-end gap-2">
        <Button
          size="icon"
          variant="outline"
          aria-label="Previous project"
          onClick={() => setIndex((value) => (value - 1 + projects.length) % projects.length)}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          aria-label="Next project"
          onClick={() => setIndex((value) => (value + 1) % projects.length)}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
      <motion.div layout className="grid gap-5 md:grid-cols-3">
        {activeProjects.map((project) => (
          <motion.div key={project.id} layout>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

