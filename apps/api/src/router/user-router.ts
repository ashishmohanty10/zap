import express from "express";
import { signup } from "../controller/auth-controller";

const userRouter = express.Router();

userRouter.post("/register", signup);

export default userRouter;
