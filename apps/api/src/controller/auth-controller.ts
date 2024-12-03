import prisma from "@repo/db";
import { Response, Request, NextFunction } from "express";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config } from "../config/config";

export async function signup(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return next(createHttpError(409, "User already registered"));
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          email,
          name,
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
        message: "User register successfully",
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

  if (!email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return next(createHttpError(400, "User not found"));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return next(createHttpError(400, "Username or password incorrect"));
    }

    const token = jwt.sign(
      {
        userId: user.id,
      },
      config.jwtSecret as string,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: `${user.id} logged in successfully`,
      access_Token: token,
    });
  } catch (error) {
    console.log("error", error);
    return next(createHttpError(500, "Internal server error"));
  }
}
