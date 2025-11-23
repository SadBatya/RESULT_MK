import { type Post } from "../types/photo";

export const getPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: Post[] = await response.json();
  return data;
};
