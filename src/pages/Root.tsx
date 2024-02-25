import MainNavbar from "@/components/layout/MainNavbar";
import { getCurrentUser } from "@/services/user.service";
import { Outlet } from "react-router-dom";
import { defer } from "react-router-dom";

const Root = () => {
  return (
    <>
      <MainNavbar />
      <div className="h-full w-full">
        <Outlet />
      </div>
    </>
  );
};

export const loader = async () => {
  const user = await getCurrentUser();

  return defer({
    user,
  });
};

export default Root;
