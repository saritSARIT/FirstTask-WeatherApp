import type { Request, Response, NextFunction } from "express";
import { postManager } from "./post.manager";
import { StatusCodes } from "http-status-codes";
import type { Post } from "../types/post";

type Params = { id: string };

export const postController = {
  createPost: (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    postManager
      .createPost(req.body)
      .then((post) => res.status(StatusCodes.CREATED).json(post))
      .catch(next);
  },

  getAllPosts: (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    postManager
      .getAllPosts()
      .then((posts) => res.json(posts))
      .catch(next);
  },

  getPostById: (
    req: Request<Params>,
    res: Response,
    next: NextFunction
  ): void => {
    postManager
      .getPostById(req.params.id)
      .then((post) => res.json(post))
      .catch(next);
  },

  updatePost: (
    req: Request<Params, Post>,
    res: Response,
    next: NextFunction
  ): void => {
    postManager
      .updatePost(req.params.id, req.body)
      .then((post) => res.json(post))
      .catch(next);
  },

  deletePost: (
    req: Request<Params>,
    res: Response,
    next: NextFunction
  ): void => {
    postManager
      .deletePost(req.params.id)
      .then((post) => res.json(post))
      .catch(next);
  },
};
