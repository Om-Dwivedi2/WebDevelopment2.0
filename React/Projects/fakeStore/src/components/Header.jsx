import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-between px-10 text-white text-lg py-1">
        <Link to={"/"}>Header</Link>
        <div className="space-x-5">
          <Link to={"/"} className="hover:underline">Home</Link>
          <Link to={"/about"} className="hover:underline">About</Link>
          <Link to={"/product"} className="hover:underline">Product</Link>
          <Link to={"/contact"} className="hover:underline">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
