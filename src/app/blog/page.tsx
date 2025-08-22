// components/Blog.tsx
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

export default async function Blog() {
  const { data: blogs, error } = await supabase.from("posts").select("*")

  if (!blogs || error) {
    console.error(error)
    return <div>Error loading blog posts</div>
  }

  return (
    <div className="space-y-8">
      {blogs.map((post) => (
        <div
          key={post.id}
          className="flex flex-col sm:flex-row justify-between items-start gap-4 max-w-2xl"
        >
          <div>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-neutral-500">
              {new Date(post.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                })}
            </p>
            <p className="text-sm text-neutral-600 mt-2">{post.description}</p>
            <p className="text-xs text-neutral-400 mt-1">{post.views} views</p>
          </div>
          <div className="flex gap-2">
            <Link href={`/blog/${post.slug}`}>
              <Button variant="ghost">
                Read
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
