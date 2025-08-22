import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export default async function Blog() {
  const { data: blogs, error } = await supabase.from("posts").select("*");

  if (!blogs || error) {
    console.error(error);
    return <div>Error loading blog posts</div>;
  }

  return (
    <div className="space-y-6 mx-auto w-full max-w-2xl px-4 sm:px-0">
      {blogs.map((post) => (
        <div key={post.id} className="border-b border-neutral-200 pb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex-1 w-full">
              <div className="flex justify-between items-start">
                <h2 className="text-lg sm:text-lg font-semibold">{post.title}</h2>
                <div className="sm:hidden ml-2 flex-shrink-0">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm">
                      Read
                    </Button>
                  </Link>
                </div>
              </div>

              <p className="text-sm sm:text-sm text-neutral-500 mt-1">
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-sm sm:text-sm text-neutral-600 mt-2">{post.description}</p>
              <p className="text-xs sm:text-xs text-neutral-400 mt-1">{post.views} views</p>
            </div>

            <div className="hidden sm:flex gap-2 flex-shrink-0 mt-2 sm:mt-0">
              <Link href={`/blog/${post.slug}`}>
                <Button variant="ghost" size="sm">
                  Read
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
