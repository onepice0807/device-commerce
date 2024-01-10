import MainNavbar from "@/components/layout/MainNavbar";
import { Outlet } from "react-router-dom";

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

export default Root;
