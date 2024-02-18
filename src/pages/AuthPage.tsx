import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AuthPage = () => {
  return (
    <div className="auth-wrapper">
      <h3>로그인 페이지</h3>
      <div className="auth-content">
        <div className="m-2">
          <label htmlFor="email">이메일</label>
          <Input id="email" type="email" name="email" className="w-52" />
        </div>

        <div className="m-2">
          <label htmlFor="password">비밀번호</label>
          <Input
            id="password"
            type="password"
            name="password"
            className="w-52"
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
      </div>
    </div>
  );
};

export default AuthPage;
