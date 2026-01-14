import { Types } from "mongoose";

export type IPost = {
  _id: Types.ObjectId;
  postName: string;
  userId: Types.ObjectId;
  text: string;
  media?: string;
  likes: number;
  createdAt: Date;
}
