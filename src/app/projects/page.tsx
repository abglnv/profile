'use client'

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type Project = {
  name: string;
  description: string;
  url?: string;
  github?: string;
  skills: string[];
};

const projects: Project[] = [
  {
    name: "Stay Connected",
    description: "Summarizes your friends’ stories and delivers only the most interesting ones daily.",
    url: undefined,
    github: undefined,
    skills: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Go", "Redis"]
  },
  {
    name: "Search By Image",
    description: "Upload an image and search for similar products in kaspi.kz using Pinecone vector DB.",
    url: undefined,
    github: "https://github.com/abglnv/tabayik",
    skills: ["FastAPI", "Pinecone", "Python", "React"]
  }
];

export default function Projects() {
  return (
    <div className="space-y-6">
  {projects.map((p) => (
    <div key={p.name} className="border-b border-neutral-200 pb-6 max-w-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h2 className="text-xl font-semibold">{p.name}</h2>
          <p className="text-sm text-neutral-600 mt-2">{p.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {p.skills.map((s) => (
              <span
                key={s}
                className="px-2 py-1 text-xs bg-neutral-100 text-neutral-700 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          {p.url && <Button variant="ghost" onClick={() => window.open(p.url, "_blank")}>
            View
          </Button>}
          {p.github && <Button variant="ghost" onClick={() => window.open(p.github, "_blank")}>
            <Github className="w-5 h-5" />
          </Button>}
        </div>
      </div>
    </div>
  ))}
</div>

  );
}
