import { Types } from "mongoose";

export type IUser ={
  _id: Types.ObjectId;
  username: string;
  displayedName: string;
}
