import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import NavigationLink from "./NavigationLink";
import { navigations } from "../config/constant";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="mx-auto max-w-7xl py-3 background-transparent">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 md:w-36" />
          </Link>
          <nav className="flex space-x-6">
            {navigations.map((item) => (
              <NavigationLink key={item.page} to={item.to} page={item.page} />
            ))}
          </nav>
        </div>
        <div className="flex justify-between items-center space-x-4 text-black text-lg font-medium">
          <BsSearch className="text-2xl cursor-pointer" />
          <button
            className="px-4 py-2 bg-red-600 rounded-md text-white hover:bg-red-500 active:bg-red-700 transition duration-150 ease-in-out"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
