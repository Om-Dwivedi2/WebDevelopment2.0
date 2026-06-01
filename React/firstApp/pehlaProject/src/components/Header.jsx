import React from "react";
import RICRLogo from "../assets/RICRLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-gray-200 flex items-center justify-between text-2xl py-5 px-15">
      <section>
        <img className="w-50" src={RICRLogo} />
      </section>
      <section className="flex  items-center gap-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/contactUs"}>Contact Us</Link>
      </section>
      <section>
        <button className="py-3 px-5 text-white border-b-5 border-r-5 border-[#79B6DE] bg-[#125785] rounded-2xl ">
          <Link to={"/login"}> Student Login</Link>
        </button>
      </section>
    </div>
  );
};
export default Header;
