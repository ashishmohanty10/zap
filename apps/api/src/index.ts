import express, { Response, Request } from "express";
import userRouter from "./router/user-router";
import zapRouter from "./router/zap-router";
import { config } from "./config/config";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();
const PORT = config.port || 3002;

app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: config.frontend_url,
  })
);

app.use(express.json());

app.get("/healthy", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Status Healty",
  });
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/zap", zapRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
