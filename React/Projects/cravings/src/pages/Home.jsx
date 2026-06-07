import React from "react";
import landingPage from "../assets/landingPage.png";
import { GiKnifeFork } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { BsSliders } from "react-icons/bs";
const Home = () => {
  return (
    <>
      {/* Landing Page   */}

      <div className="bg-[url(./assets/landingPage.png)] bg-cover bg-center h-[80vh] w-full pt-20 px-20">
        <div className="bg-white rounded p-1 text-(--color-primary) flex items-center gap-1 font-semibold text-sm w-fit ">
          <GiKnifeFork className="w-5 h-5" />
          Delicious Food, Delivered Fast!
        </div>
        <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold text-black pt-4">
          Your Favorite Food,
        </h1>
        <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold text-(--color-primary) pt-2">
          Delivered Fast
        </h1>
        <p className="lg:text-md md:text-base text-sm text-(--color-secondary) pt-4 w-85">
          Order from thousands of restaurants and get it delivered to your
          doorstep
        </p>

        <div className="flex gap-5 mt-10 items-center">
          <button className="text-white bg-(--color-primary) px-5 font-semibold py-2 text-center rounded">
            Order Now
          </button>
          <button className="text-black bg-white border border-gray-400 rounded px-5 font-semibold py-2 text-center">
            Sign Up
          </button>
        </div>

        <div className="flex items-center gap-2 p-2 border border-gray-400 rounded-xl bg-white mt-5 w-[50%] pr-4">
          <GoSearch />
          <input
          className="w-full outline-none text-sm"
            type="text"
            name="search"
            id="search"
            placeholder="Search for restaurants or dishes..."
          />
          <BsSliders  className="w-5 h-5 float-end" />
        </div>

      </div>
    </>
  );
};

export default Home;
