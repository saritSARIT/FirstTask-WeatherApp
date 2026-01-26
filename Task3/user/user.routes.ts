import { Router } from "express";
import { validateRequest } from "../middlewares/validate";
import { createUserSchema } from "./user.validator";
import { userController } from "./user.controller";

const userRoutes = Router();

userRoutes.post("/", validateRequest({ body: createUserSchema }), userController.createUser);
userRoutes.get("/", userController.getAllUsers);

export default userRoutes;
