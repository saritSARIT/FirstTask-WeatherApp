import type { Request, Response, NextFunction } from "express";

enum HttpStatus {
  INTERNAL_SERVER_ERROR = 500,
}

const isError = (value: unknown): value is Error =>
  typeof value === "object" && value !== null && "message" in value;

export const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const message = isError(error) ? error.message : "Internal server error";

  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message });
};
