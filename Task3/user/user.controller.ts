import type { Request, Response, NextFunction } from "express";
import { userManager } from "./user.manager";
import { StatusCodes } from "http-status-codes";

const handleError =
  (next: NextFunction) =>
  (error: unknown): void => {
    next(error);
  };

export const userController = {
  createUser: (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    userManager
      .createUser(req.body)
      .then((user) => res.status(StatusCodes.CREATED).json(user))
      .catch(handleError(next));
  },
  getAllUsers: (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    userManager
      .getAllUsers()
      .then((users) => res.status(StatusCodes.OK).json(users))
      .catch(handleError(next));
  },
};
