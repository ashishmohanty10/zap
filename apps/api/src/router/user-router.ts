import express from "express";
import { login, logout, signup } from "../controller/auth-controller";
import { getUser } from "../controller/user-controller";
import { authMiddleware } from "../middlewate/auth-middlewate";

const userRouter = express.Router();

userRouter.post("/register", signup);
userRouter.post("/login", login);
userRouter.post("/logout", logout);

userRouter.use(authMiddleware);
userRouter.get("/", getUser);

export default userRouter;
