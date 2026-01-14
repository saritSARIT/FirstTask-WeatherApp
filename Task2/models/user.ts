import { Schema, model } from "mongoose";
import { IUser } from "../types/Iuser";

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    displayedName: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("User", userSchema);
