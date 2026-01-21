import { postRepository } from "./post.repository";
import type { Post } from "../types/post";
import type { Document } from "mongoose";

type PostDocument = Post & Document;

export const postManager = {
  createPost: async (data: Post): Promise<PostDocument> =>
    await postRepository.createPost(data),

  getAllPosts: async (): Promise<PostDocument[]> =>
    await postRepository.getAllPosts(),

  getPostById: async (postId: string): Promise<PostDocument | null> =>
    await postRepository.getPostById(postId),

  updatePost: async (
    postId: string,
    data: Post
  ): Promise<PostDocument | null> =>
    await postRepository.updatePost(postId, data),

  deletePost: async (postId: string): Promise<PostDocument | null> =>
    await postRepository.deletePost(postId),
};
