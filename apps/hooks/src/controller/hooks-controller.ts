import prisma from "@repo/db";
import { Request, Response } from "express";

export async function hooksController(req: Request, res: Response) {
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
}
