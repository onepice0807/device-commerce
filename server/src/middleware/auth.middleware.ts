import { NotAuthorizedError } from "@/shared/custom-error-handler";
import { config } from "@/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken || accessToken === "") {
      throw new NotAuthorizedError(
        "AccessToken이 유효하지 않습니다",
        "Middleware verifyToken() method error",
      );
    }

    const decoded = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET!);
    //@ts-ignore
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
