import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signup } from "@/services/auth";
import { useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const loginHander: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);
    setEmailError(null);
    setPasswordError(null);
    try {
      const emailChecked = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailChecked.test(email) || email.trim().length === 0) {
        setEmailError("이메일이 유효하지 않습니다");
        return;
      }
      if (password.trim().length < 6) {
        setPasswordError("비밀번호가 유효하지 않습니다.");
        return;
      }
      const userData = await signup({ email, password });

      if (!userData.data) {
        throw userData.message;
      }
    } catch (err) {
      console.log(err);
      setError(err);
    }

    setEmail("");
    setPassword("");
  };

  console.log(error);

  return (
    <form
      onSubmit={loginHander}
      className="flex flex-col items-center justify-center w-full h-screen"
    >
      <div className="bg-[#1d4949] border-2 border-[#1d4949] rounded-lg p-12 w-[460px] h-[480px]">
        <h3 className="text-white text-xl mb-12">로그인 페이지</h3>
        <div className="space-y-8">
          <div>
            <label htmlFor="email" className="text-white">
              이메일
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              className="mt-2 block w-full px-6 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="mt-4 text-sm text-red-600">{emailError}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="text-white">
              비밀번호
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              className="mt-2 block w-full px-6 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="mt-4 text-sm text-red-600">{passwordError}</p>
            )}
          </div>
          <div className="flex justify-between w-full pt-8">
            <Button
              type="submit"
              className="px-8 py-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              로그인
            </Button>
            <Button
              type="reset"
              className="px-8 py-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              초기화
            </Button>
          </div>
          {error && <p className="mt-8 text-sm text-red-600">{error}</p>}
        </div>
      </div>
    </form>
  );
};

export default AuthPage;
