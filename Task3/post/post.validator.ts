import Joi from "joi";
import { Types } from "mongoose";
import type { Post } from "../types/post";
import   {maxLength} from "./post.consts";



const objectIdValidator = (
  value: string,
  helpers: Joi.CustomHelpers
): string | Joi.ErrorReport =>
  Types.ObjectId.isValid(value) ? value : helpers.error("any.invalid");

export const createPostSchema = Joi.object<Post>({
  postName: Joi.string().required(),
  userId: Joi.string().custom(objectIdValidator).required(),
  text: Joi.string().max(maxLength).required(),
  media: Joi.string().optional(),
});

export const updatePostSchema = Joi.object<Partial<Post>>({
  postName: Joi.string().optional(),
  text: Joi.string().max(maxLength).optional(),
  media: Joi.string().optional(),
}).min(1);
