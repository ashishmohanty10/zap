import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
import { config } from "../config/config";

interface AuthRequest extends Request {
  user?: { id: string };
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(createHttpError(401, "Authorization token is required"));
  }

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(
      createHttpError(401, "Authorization token is required or malformed")
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(
      token as unknown as string,
      config.jwtSecret as string
    ) as {
      userId: string;
    };

    if (!payload.userId) {
      return next(createHttpError(401, "Invalid token payload"));
    }

    req.user = { id: payload.userId };
    next();
  } catch (error) {
    return next(createHttpError(401, "Unauthorized, invalid token"));
  }
}
