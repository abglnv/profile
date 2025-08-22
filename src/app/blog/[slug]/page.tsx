// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc"; // RSC support
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
  const { slug } = await params;
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
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle<BlogPost>()

  if (!post || error) {
    notFound();
  }

  await supabase
    .from("posts")
    .update({ views: post.views + 1 })
    .eq("id", post.id);

  return (
    <div className="flex justify-center px-4 py-8 w-2xl">
      <div className="max-w-3xl w-full">
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

        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-neutral-400 text-sm mb-8">
          {new Date(post.created_at).toLocaleDateString()} • {post.views + 1}{" "}
          views
        </p>

        <article className="prose prose-neutral max-w-none">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </div>
  );
}
