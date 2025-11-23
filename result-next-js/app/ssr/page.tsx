import { Post } from "@/src/shared/types/photo";
import { PostCard } from "@/src/shared/ui";

// export const dynamic = "force-dynamic"; // Конфиг от Next JS

export default async function Page() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: "no-store",
  });
  const post: Post[] = await response.json();

  return (
    <div className="flex flex-col gap-4">
      {post?.map(({ id, title }) => (
        <PostCard key={id} id={id} title={title} />
      ))}
    </div>
  );
}
