import PostModel from "../models/post";
import { Post } from "../types/post";



export const PostRepository = {
  createPost: async (data: Post) => {
    return PostModel.create(data);
  }
};
