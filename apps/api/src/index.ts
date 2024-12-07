import express, { Response, Request } from "express";
import userRouter from "./router/user-router";
import zapRouter from "./router/zap-router";
import { config } from "./config/config";
import cors from "cors";

const app = express();
const PORT = config.port || 3002;

app.use(cors());
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
