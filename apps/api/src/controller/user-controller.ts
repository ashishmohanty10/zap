import prisma from "@repo/db";
import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

interface AuthRequest extends Request {
  user?: { id: string };
}

export async function getUser(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const id = req.user?.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        name: true,
        email: true,
      },
    });

    if (!user) {
      return next(createHttpError(404, "User not found"));
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(
      "Error while fetching User Details:",
      error instanceof Error ? error.stack : error
    );
    return next(createHttpError(500, "Internal Server Error"));
  }
}
