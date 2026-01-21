import userSchema from "../models/user";
import type { User } from "../types/user";
import type { Document } from "mongoose";

type UserDocument = User & Document;

export const userRepository = {
  createUser: async (data: User): Promise<UserDocument> =>
    await userSchema.create(data),

  getAllUsers: async (): Promise<UserDocument[]> =>
    await userSchema.find(),
};
