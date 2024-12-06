import { Request, Response } from "express";
import express from "express";
import prisma from "@repo/db";
import { hooksController } from "./controller/hooks-controller";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/healthy", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Status Healty",
  });
});

app.post("/hooks/catch/:userId/:zapId", hooksController);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
