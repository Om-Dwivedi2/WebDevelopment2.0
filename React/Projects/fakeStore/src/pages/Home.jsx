import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="flex flex-col items-center justify-center gap-5 mt-40 ">
        <h1 className="text-4xl">Welcome to our Website</h1>
        <button
          onClick={() => {
            navigate("/product");
          }}
          className="rounded bg-green-600 text-center text- text-white active:scale-95 px-3 py-2"
        >
          View Products
        </button>
      </main>
    </>
  );
};

export default Home;
