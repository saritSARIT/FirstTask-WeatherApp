import { Router } from "express";
import { validateRequest } from "../middlewares/validate";
import {
  createPostSchema,
  updatePostSchema,
} from "./post.validator";
import { postController } from "./post.controller";

const postRoutes = Router();

postRoutes.post("/", validateRequest({ body: createPostSchema }), postController.createPost);
postRoutes.get("/", postController.getAllPosts);
postRoutes.get("/:id", postController.getPostById);
postRoutes.put("/:id", validateRequest({ body: updatePostSchema }), postController.updatePost);
postRoutes.delete("/:id", postController.deletePost);

export default postRoutes;
