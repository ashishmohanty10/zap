import { Request, Response, NextFunction } from "express";
import { zapCreateSchema } from "@repo/common";
import prisma from "@repo/db";
import createHttpError from "http-errors";

interface AuthRequest extends Request {
  user?: { id: string };
}

export async function createZap(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const id = req.user?.id;
  if (!id) {
    res.status(400).json({ message: "User ID is required" });
    return;
  }

  const body = req.body;
  const parsedData = zapCreateSchema.safeParse(body);

  if (!parsedData.success) {
    res.status(400).json({
      message: "Invalid inputs",
      errors: parsedData.error.errors,
    });
    return;
  }

  try {
    const zap = await prisma.$transaction(async (tx) => {
      const newZap = await tx.zap.create({
        data: {
          triggerId: body.triggerId || "",
          userId: id,
          actions: {
            create: parsedData.data.actions.map((x, idx) => ({
              actionId: x.availableActionId,
              sortingOrder: idx,
              metadata: x.actionMetaData,
            })),
          },
        },
      });

      const trigger = await tx.trigger.create({
        data: {
          zapId: newZap.id,
          triggerId: parsedData.data.availableTriggerId,
        },
      });

      await tx.zap.update({
        where: {
          id: newZap.id,
        },
        data: {
          triggerId: trigger.id,
        },
      });

      return newZap;
    });

    res.status(201).json(zap);
  } catch (error) {
    console.error("Error creating zap:", error);
    return next(createHttpError(500, "Internal Server Error"));
  }
}

export async function getZap(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const id = req.user?.id;
  if (!id) {
    res.status(400).json({ message: "User ID is required" });
    return;
  }

  try {
    const zaps = await prisma.zap.findMany({
      where: {
        userId: id,
      },
      include: {
        actions: {
          include: {
            type: true,
          },
        },
        trigger: {
          include: {
            type: true,
          },
        },
      },
    });

    res.status(200).json({
      zaps,
    });
  } catch (error) {
    console.error("Error getching all zap:", error);
    return next(createHttpError(500, "Internal Server Error"));
  }
}

export async function getZapById(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const userId = req.user?.id;
  const zapId = req.params.zapId;

  if (!userId) {
    res.status(400).json({ message: "User ID is required" });
    return;
  }

  if (!zapId) {
    res.status(400).json({ message: "Zap ID is required" });
    return;
  }

  try {
    const zap = await prisma.zap.findUnique({
      where: {
        id: zapId,
        userId: userId,
      },
      include: {
        actions: {
          include: {
            type: true,
          },
        },
        trigger: {
          include: {
            type: true,
          },
        },
      },
    });

    if (!zap) {
      res.status(404).json({ message: "Zap not found" });
      return;
    }

    res.status(200).json({
      zap,
    });
  } catch (error) {
    console.error("Error fetching zap:", error);
    return next(createHttpError(500, "Internal Server Error"));
  }
}
