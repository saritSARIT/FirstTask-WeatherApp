import { Schema, model, Types } from "mongoose";
import { IPost } from "../types/Ipost";

const postSchema = new Schema<IPost>(
  {
    postName: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
    },
    media: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true
  }
);


export default model<IPost>("Post", postSchema);
