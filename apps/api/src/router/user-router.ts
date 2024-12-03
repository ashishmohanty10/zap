import express from "express";
import { login, signup } from "../controller/auth-controller";

const userRouter = express.Router();

userRouter.post("/register", signup);
userRouter.post("/login", login);

export default userRouter;
