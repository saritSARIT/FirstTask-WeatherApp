import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const message = error?.message ?? "Internal server error";
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
};
