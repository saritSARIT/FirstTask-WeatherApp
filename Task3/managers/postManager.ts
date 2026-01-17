import { PostRepository} from "../repositories/postRepository";
import {UserRepository }from "../repositories/userRepository";
import { validateCreatePost, validateGetAllPosts } from "../validators/postValidator";
import { Post } from "../types/post";


export const PostManager = {
  createPost: async (data: Post) => {
  // בדיקת קלט
  validateCreatePost(data);

  // בדיקה שהמשתמש קיים
//   const user = await UserRepository.getUserById(data.userId);
//   if (!user) {
//     throw new Error("User not found");
//   }

  // יצירת הפוסט
  return PostRepository.createPost(data);
},
    getAllPosts: async (data: Post) => {
    // בדיקת קלט
    validateGetAllPosts(data);
  }
};
