import postSchema from "../models/post";
import type { Post } from "../types/post";
import type { Document } from "mongoose";

type PostDocument = Post & Document;

export const postRepository = {
  createPost: async (data: Post): Promise<PostDocument> =>
    await postSchema.create(data),

  getAllPosts: async (): Promise<PostDocument[]> =>
    await postSchema.find().sort({ createdAt: -1 }),

  getPostById: async (postId: string): Promise<PostDocument | null> =>
    await postSchema.findById(postId),

  updatePost: async (postId: string, data: Post): Promise<PostDocument | null> =>
    await postSchema.findByIdAndUpdate(postId, data, { new: true }),

  deletePost: async (postId: string): Promise<PostDocument | null> =>
    await postSchema.findByIdAndDelete(postId),
};
