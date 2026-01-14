import { Schema, model, InferSchemaType } from "mongoose";
import { IPost } from "../types/Ipost";

const postSchema = new Schema<IPost>(
  {
    postName: {
      type: String,
      required: true,
      index: true,
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
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false,
  }
);

export default model("Post", postSchema);
