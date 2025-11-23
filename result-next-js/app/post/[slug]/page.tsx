import { type Post } from "@/src/shared/types/photo";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  return posts.map((post) => ({
    slug: String(post.id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  ).then((res) => res.json());

  return (
    <div className="flex flex-col gap-4 p-4 text-center w-screen h-screen justify-center items-center">
      <h1 className="text-4xl font-semibold">{post.title}</h1>
      <p className="text-white/50 text-xl">{post.body}</p>
    </div>
  );
}
