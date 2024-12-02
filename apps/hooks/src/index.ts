import { Request, Response } from "express";
import express from "express";
import prisma from "@repo/db";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/healthy", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Status Healty",
  });
});

app.post("/hooks/catch/:userId/:zapId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const zapId = req.params.zapId;
  const metadata = req.body;

  if (!zapId) {
    res.status(400).json({
      message: "NO zapID",
    });
  }

  try {
    await prisma.$transaction(async (tx: any) => {
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

    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    console.log("error while database transaction", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
