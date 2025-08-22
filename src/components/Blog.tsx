// components/Blog.tsx
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

interface BlogPost {
  title: string
  date: string
  description: string
  url: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with AI Agents",
    date: "August 20, 2025",
    description: "An introduction to building and deploying AI-powered agents in modern applications.",
    url: "/blog/ai-agents",
  },
  {
    title: "Minimalist Design in Web Development",
    date: "August 10, 2025",
    description: "Exploring the power of simplicity and clarity in modern UI design.",
    url: "/blog/minimalist-design",
  },
]

export default async function Blog() {
  const {data: blogs, error} = await supabase.from("posts").select("*");

  if (!blogs || error) {
    console.error(error);
    return <div>Error loading blog posts</div>;
  }

  return (
    <div className="space-y-8">
      {blogs.map((post) => (
        <div key={post.url} className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-neutral-500">{post.date}</p>
            <p className="text-sm text-neutral-600 mt-2">{post.description}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => window.open(post.url, "_blank")}>
              Read
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
