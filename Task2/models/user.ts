import { Schema, model } from "mongoose";
import { IUser } from "../types/Iuser";

const userSchema = new Schema<IUser>(
{
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    displayedName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true
  }
);

export default model<IUser>("User", userSchema);
