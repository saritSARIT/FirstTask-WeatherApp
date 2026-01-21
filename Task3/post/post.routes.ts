import { Router } from "express";
import { validateBody } from "../middlewares/validate";
import {
  createPostSchema,
  updatePostSchema,
} from "./post.validator";
import { postController } from "./post.controller";

const router = Router();

router.post("/", validateBody(createPostSchema), postController.createPost);
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.put("/:id", validateBody(updatePostSchema), postController.updatePost);
router.delete("/:id", postController.deletePost);

export default router;
