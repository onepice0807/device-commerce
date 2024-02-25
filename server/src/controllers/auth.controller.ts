import {
  comparePassword,
  generateTokens,
  hashPassword,
} from "@/shared/auth.utile";
import { db } from "@/shared/db";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json({
      meesage: "이메일과 비밀번호는 필수 입력값입니다.",
      data: null,
    });
    return;
  }

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: "이미 가입된 이메일입니다.",
      data: null,
    });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  res.status(StatusCodes.CREATED).json({
    message: "유저가 생성되었습니다.",
    data: {
      user,
    },
  });
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json({
      meesage: "이메일과 비밀번호는 필수 입력값입니다.",
      data: null,
    });
    return;
  }

  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      message: "해당 이메일로 가입된 정보를 찾을 수 없습니다.",
      data: null,
    });
    return;
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      message: "비밀번호가 일치하지 않습니다.",
      data: null,
    });
    return;
  }

  const { accessToken, refreshToken } = generateTokens({
    id: user.id,
    email: user.email,
  });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1),
    secure: process.env.NODE_ENV === "production",
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({
    message: "로그인에 성공하였습니다.",
    data: null,
  });
};

export const signout = async (_req: Request, res: Response) => {
  res.cookie("accessToken", "", {
    httpOnly: true,
    expires: new Date(Date.now()),
    secure: process.env.NODE_ENV === "production",
  });
  res.cookie("refreshToken", "", {
    httpOnly: true,
    expires: new Date(Date.now()),
    secure: process.env.NODE_ENV === "production",
  });
  res
    .status(StatusCodes.OK)
    .json({ message: "유저가 로그아웃 되었습니다.", data: null });
};
