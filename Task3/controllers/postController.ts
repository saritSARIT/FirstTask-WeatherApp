import { Request, Response } from "express";
import { PostManager } from "../managers/postManager";

export const PostController = {
  createPost: async (req: Request, res: Response) => {
    try {
      const post = await PostManager.createPost(req.body);
      res.status(201).json(post);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
    getAllPosts: async (req: Request, res: Response) => {
    try {
        const get = await PostManager.getAllPosts(req.body);
        res.status(200).json(get);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
};
