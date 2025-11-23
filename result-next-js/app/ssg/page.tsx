import { Post } from "@/src/shared/types/photo";
import { PostCard } from "@/src/shared/ui";
import type { Metadata } from "next";

// export const dynamic = "force-static"; // Конфиг от Next JS

export const metadata: Metadata = {
  title: "SSG",
};

export default async function Page() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const post: Post[] = await response.json();

  // if (response.ok) {
  //   throw new Error("Ошибка загрузки постов");
  // }

  return (
    <div className="flex flex-col gap-4">
      {post?.map(({ id, title }) => (
        <PostCard key={id} id={id} title={title} />
      ))}
    </div>
  );
}
