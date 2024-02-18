import { hashPassword } from "@/shared/auth.utile";
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
