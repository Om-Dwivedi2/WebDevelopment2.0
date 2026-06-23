import axios from "axios";
import React from "react";

const Login = () => {
  async function sendData() {
    const data = await axios.get("http://localhost:3000/auth/login");
    console.log(data.data.data);
  }

  return (
    <>
      <div>Login</div>
      <button
        onClick={() => {
          sendData();
        }}
        className="bg-red-500 border-2 border-black px-5 py-3 rounded-lg text-white active:scale-95"
      >
        Send Data
      </button>
    </>
  );
};

export default Login;
