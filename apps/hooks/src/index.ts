import { Request, Response } from "express";
import express from "express";
import prisma from "@repo/db";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/healthy", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Status Healty",
  });
});

app.post("/hooks/catch/:userId/:zapId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const zapId = req.params.zapId;
  const { metadata } = req.body;

  try {
    await prisma.$transaction(async (tx) => {
      if (!zapId) {
        return res.status(400).json({
          message: "NO zapID",
        });
      }
      const run = await tx.zapRun.create({
        data: {
          metadata: metadata,
          zapId: zapId,
        },
      });

      await tx.zapRunOutbox.create({
        data: {
          zapRunId: run.id,
        },
      });
    });
  } catch (error) {
    console.log("error while database transaction", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
