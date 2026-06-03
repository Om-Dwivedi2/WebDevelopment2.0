import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-orange-700 h-[10vh] text-white flex  items-center justify-between px-10 py-1">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-17.5" />
        </Link>

        <div className="space-x-5">
          <Link to={"/login"} className="hover:bg-white border border-white hover:text-orange-600 rounded px-2 py-1">
            Login
          </Link>
          <Link
            to={"register"}
            className="hover:bg-white border border-white hover:text-orange-600 rounded px-2 py-1"
          >
            Register
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
