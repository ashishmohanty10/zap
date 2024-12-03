import express, { Response, Request } from "express";
import userRouter from "./router/user-router";
import zapRouter from "./router/zap-router";

export const app = express();
app.use(express.json());

app.get("/healthy", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Status Healty",
  });
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/zap", zapRouter);
