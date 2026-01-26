import type { Request, Response, NextFunction } from "express";
import { postManager } from "./post.manager";
import { StatusCodes } from "http-status-codes";
import type { Post } from "../types/post";

export const warpController =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

export const postController = {
  createPost: warpController(async (req: Request, res: Response) => {
    const post = await postManager.createPost(req.body);
    res.status(StatusCodes.CREATED).json(post);
  }),
  getAllPosts: warpController(async (req: Request, res: Response) => {
    const posts = await postManager.getAllPosts();
    res.json(posts);
  }),

  getPostById: warpController(async (req: Request<{ id: string }>, res: Response) => {
    const post = await postManager.getPostById(req.params.id);
    res.json(post);
  }),

  updatePost: warpController(
    async (req: Request<{ id: string }, Post>, res: Response) => {
      const post = await postManager.updatePost(req.params.id, req.body);
      res.json(post);
    },
  ),

  deletePost: warpController(async (req: Request<{ id: string }>, res: Response) => {
    const post = await postManager.deletePost(req.params.id);
    res.json(post);
  }),
};
