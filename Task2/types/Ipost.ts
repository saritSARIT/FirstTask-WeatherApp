import { Document, Types } from "mongoose";
import { IUser } from "./Iuser";

export interface IPost extends Document {
  postName: string;
  userId: Types.ObjectId | IUser;
  text: string;
  media?: string;
  likes: number;
  createdAt: Date;
}
