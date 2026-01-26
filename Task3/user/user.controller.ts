import type { Request, Response, NextFunction } from "express";
import { userManager } from "./user.manager";
import { StatusCodes } from "http-status-codes";

export const warpController =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

export const userController = {
  createUser: warpController(async (req: Request, res: Response) => {
    const user = await userManager.createUser(req.body);
    res.status(StatusCodes.CREATED).json(user);
  }),
  getAllUsers: warpController(async (req: Request, res: Response) => {
    const users = await userManager.getAllUsers();
    res.json(users);
  }),
};
