import express from "express";
import { authMiddleware } from "../middlewate/auth-middlewate";
import { createZap, getZap, getZapById } from "../controller/zap-controller";

const zapRouter = express.Router();

zapRouter.use(authMiddleware);
zapRouter.post("/", createZap);
zapRouter.get("/", getZap);
zapRouter.get("/:zapId", getZapById);

export default zapRouter;
