import { Router } from "express";
import { validateBody } from "../middlewares/validate";
import { createUserSchema } from "./user.validator";
import { userController } from "./user.controller";

const router = Router();

router.post("/", validateBody(createUserSchema), userController.createUser);
router.get("/", userController.getAllUsers);

export default router;
