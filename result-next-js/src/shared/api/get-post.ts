import { type Post } from "../types/photo";

export const getPost = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data: Post = await response.json();
  return data;
};
