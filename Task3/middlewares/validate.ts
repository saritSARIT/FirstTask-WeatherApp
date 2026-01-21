import type { Request, Response, NextFunction } from "express";
import type Joi from "joi";
import { StatusCodes } from "http-status-codes";

export const validateBody =
  (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);

    error
      ? res.status(StatusCodes.BAD_REQUEST).json({
          message: error.details[0].message,
        })
      : next();
  };
