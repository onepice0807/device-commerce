type signupType = {
  email: string;
  password: string;
};

export const signup = async ({ email, password }: signupType) => {
  const res = await fetch("http://localhost:8000/api/v1/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return await res.json();
};
