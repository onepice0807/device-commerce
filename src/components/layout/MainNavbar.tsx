import { User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ui/theme-toggle";

const MainNavbar = () => {
  return (
    <nav className="w-full h-[100px] sticky top-0 flex items-center justify-around border-b-2 pb-1.5 border-b-gray-300 z-[999] bg-black/5">
      <div>
        <Link to="/" className="text-3xl font-bold">
          LOGO
        </Link>
      </div>
      <div className="flex items-center gap-6 text-[22px] text-gray-500">
        <Link to="/">item1</Link>
        <Link to="/">item1</Link>
        <Link to="/">item1</Link>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link to="/auth">
          <User2 className="h-8 w-8" />
        </Link>
      </div>
    </nav>
  );
};

export default MainNavbar;
