"use client";

import { getPosts } from "@/src/shared/api";
import { Post } from "@/src/shared/types/photo";
import { PostCard, SearchInput } from "@/src/shared/ui";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search")?.toString();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue?.toLowerCase() || "")
      ),
    [posts, searchValue]
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-4 p-4">
      <SearchInput />
      {filteredPosts.map(({ id, title }) => (
        <PostCard key={id} id={id} title={title} />
      ))}
    </div>
  );
}
