import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc"; 
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  views: number;
  created_at: string;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const { data } = await supabase
    .from("posts")
    .select("title")
    .eq("slug", slug)
    .single();

  return {
    title: data?.title ?? "Blog",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle<BlogPost>();

  if (!post || error) {
    notFound();
  }

  await supabase
    .from("posts")
    .update({ views: post.views + 1 })
    .eq("id", post.id);

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 w-full max-w-screen-md mx-auto">
      <div className="mb-6 text-sm text-neutral-500">
        <Link href="/" className="hover:underline">
          home
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:underline">
          blog
        </Link>{" "}
        / {slug}
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-neutral-400 text-sm mb-6">
        {new Date(post.created_at).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        • {post.views + 1} views
      </p>

      <article className="prose prose-neutral sm:prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
