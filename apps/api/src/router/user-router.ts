import express from "express";
import { login, signup } from "../controller/auth-controller";
import { getUser } from "../controller/user-controller";
import { authMiddleware } from "../middlewate/auth-middlewate";

const userRouter = express.Router();

userRouter.post("/register", signup);
userRouter.post("/login", login);

userRouter.use(authMiddleware);
userRouter.get("/user", getUser);

export default userRouter;
