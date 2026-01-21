import { userRepository } from "./user.repository";
import type { User } from "../types/user";
import type { Document } from "mongoose";

type UserDocument = User & Document;

export const userManager = {
  createUser: async (data: User): Promise<UserDocument> =>
    await userRepository.createUser(data),

  getAllUsers: async (): Promise<UserDocument[]> =>
    await userRepository.getAllUsers(),
};
