import { customAxios } from "./custom-axios";

type SigninProps = {
  email: string;
  password: string;
};

export const signin = async ({ email, password }: SigninProps) => {
  const { data } = await customAxios.post("/signin", {
    email,
    password,
  });
  return data;
};
