import { Router } from "express";
import { PostController } from "../controllers/postController";

const router = Router();


router.post("/", PostController.createPost);
router.get("/", PostController.getAllPosts);


export default router;
