import { config } from "@/config";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

type CreateJwtType = {
  id: string;
  email: string;
};

const SALT_ROUND = 10;

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, SALT_ROUND);
  return hashedPassword;
};

export const comparePassword = async (
  inputPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  const isMatch = await compare(inputPassword, hashedPassword);
  return isMatch;
};

export const generateTokens = (payload: CreateJwtType) => {
  const accessToken = jwt.sign(payload, config.ACCESS_TOKEN_SECRET!, {
    expiresIn: "1d",
  });
  const refreshToken = jwt.sign(payload, config.REFRESH_TOKEN_SECRET!, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};
