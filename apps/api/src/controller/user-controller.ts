import { updateProfileSchema } from "@repo/common";
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

export async function deleteUser(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const id = req.user?.id;

  try {
    const user = prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return next(createHttpError(404, "User not found"));
    }

    await prisma.user.delete({
      where: { id },
    });

    res.cookie("access_Token", "", {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: -1,
    });

    res.status(200).json({
      message: "Your account deleted successfully!!",
    });
  } catch (error) {
    console.error(
      "Error while fetching User Details:",
      error instanceof Error ? error.stack : error
    );
    return next(createHttpError(500, "Internal Server Error"));
  }
}

export async function editUser(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const id = req.user?.id;

  const { email, name } = req.body;

  const parsedData = updateProfileSchema.safeParse({ email, name });

  if (!parsedData.success) {
    return next(
      createHttpError(400, "Validation failed", {
        details: parsedData.error.errors,
      })
    );
  }

  try {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      return next(createHttpError(404, "User not found"));
    }

    const updatedUser = await prisma.user.update({
      data: {
        email: parsedData.data.email,
        name: parsedData.data.name,
      },
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      updatedUser,
    });
  } catch (error) {
    console.log("error while profile edit", error);
  }
}
