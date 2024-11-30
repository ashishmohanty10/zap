import { Request, Response } from "express";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/healthy", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Status Healty",
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
