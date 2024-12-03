import prisma from "@repo/db";
import { Response, Request, NextFunction } from "express";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config } from "../config/config";
import { signupSchema, loginSchema } from "@repo/common";

export async function signup(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body;

  const parsedData = signupSchema.safeParse({ name, email, password });

  if (!parsedData.success) {
    return next(
      createHttpError(400, "Validation failed", {
        details: parsedData.error.errors,
      })
    );
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: parsedData.data.email,
      },
    });

    if (existingUser) {
      return next(createHttpError(409, "User already registered"));
    }

    try {
      const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);
      const newUser = await prisma.user.create({
        data: {
          email: parsedData.data.email,
          name: parsedData.data.name,
          password: hashedPassword,
        },
      });

      const token = jwt.sign(
        { userId: newUser.id },
        config.jwtSecret as string,
        {
          expiresIn: "7d",
        }
      );

      res.status(201).json({
        message: `${newUser.id} register successfully`,
        access_token: token,
      });
    } catch (error) {
      console.log(error);
      return next(createHttpError(400, "Could not create new user"));
    }
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Internal server error!!"));
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  const parsedData = loginSchema.safeParse({ email, password });

  if (!parsedData.success) {
    return next(
      createHttpError(400, "Validation failed", {
        details: parsedData.error.errors,
      })
    );
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: parsedData.data.email,
      },
    });

    if (!existingUser) {
      return next(createHttpError(400, "User not found"));
    }

    const isMatch = await bcrypt.compare(
      parsedData.data.password,
      existingUser.password
    );

    if (!isMatch) {
      return next(createHttpError(400, "Username or password incorrect"));
    }

    const token = jwt.sign(
      {
        userId: existingUser.id,
      },
      config.jwtSecret as string,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: `${existingUser.id} logged in successfully`,
      access_Token: token,
    });
  } catch (error) {
    console.log("error", error);
    return next(createHttpError(500, "Internal server error"));
  }
}
