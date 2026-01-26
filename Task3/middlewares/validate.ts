import type { Request, Response, NextFunction } from "express";
import type Joi from "joi";
import { StatusCodes } from "http-status-codes";

type ValidationSchemas = {
  body?: Joi.ObjectSchema;
  query?: Joi.ObjectSchema;
  params?: Joi.ObjectSchema;
};

export const validateRequest =
  (schemas: ValidationSchemas) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const validations = [
      schemas.body && { schema: schemas.body, data: req.body },
      schemas.query && { schema: schemas.query, data: req.query },
      schemas.params && { schema: schemas.params, data: req.params },
    ].filter(Boolean) as { schema: Joi.ObjectSchema; data: unknown }[];

    for (const { schema, data } of validations) {
      const { error } = schema.validate(data);
      if (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
          message: error.details[0].message,
        });
        return;
      }
    }

    next();
  };
