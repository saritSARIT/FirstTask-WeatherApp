import {Post} from "../types/post"


export const validateCreatePost = (data: Post) => {
  if (!data.postName || !data.text || !data.userId) {
    throw new Error("Missing required fields");
  }

  if (data.text.length > 200) {
    throw new Error("Post text is too long");
  }
};

export const validateGetAllPosts = (data: Post) => {
  if (!data.userId) {
    throw new Error("Missing required fields");
  }
};