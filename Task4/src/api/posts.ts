import  { api } from "./server";
import type { Post } from "../types/post";

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${api}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export const createPost = async (data: {
  postName: string;
  text: string;
  userId: string;
  media?: string;
}): Promise<Post> => {
  const res = await fetch(`${api}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
};

export const updatePost = async (
  id: string,
  data: Partial<Pick<Post, "postName" | "text" | "media">>
): Promise<Post> => {
  const res = await fetch(`${api}/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update post");
  return res.json();
};

export const deletePost = async (id: string): Promise<void> => {
  const res = await fetch(`${api}/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete post");
};
