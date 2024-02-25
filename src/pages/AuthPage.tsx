import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signin } from "@/services/auth.service";
import { useState } from "react";

const AuthPage = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await signin({ email: emailInput, password: passwordInput });
  };

  return (
    <div className="auth-wrapper">
      <h3>로그인 페이지</h3>
      <form onSubmit={submitHandler} className="auth-content">
        <div className="m-2">
          <label htmlFor="email">이메일</label>
          <Input
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            id="email"
            type="email"
            name="email"
            className="w-52"
          />
        </div>

        <div className="m-2">
          <label htmlFor="password">비밀번호</label>
          <Input
            value={passwordInput}
            id="password"
            type="password"
            name="password"
            className="w-52"
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <div className="auth-button">
          <Button type="submit" className="">
            로그인
          </Button>
          <Button type="reset" className="">
            초기화
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
