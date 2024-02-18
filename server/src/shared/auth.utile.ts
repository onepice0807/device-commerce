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

export const createJWT = ({ email, id }: CreateJwtType) => {
  const token = jwt.sign({ email, id }, config.JWT_TOKEN!, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyJWT = (token: string) => {
  const decoded = jwt.verify(token, config.JWT_TOKEN!) as CreateJwtType;
  return decoded;
};
