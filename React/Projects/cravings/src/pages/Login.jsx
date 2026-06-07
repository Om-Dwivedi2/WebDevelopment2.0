import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginData, setLoginData] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    setLoginData([...loginData, { loginEmail, loginPassword }]);
    
    setLoginEmail("");
    setLoginPassword("");
  };

  return (
    <>
      <div className="h-[90vh] bg-[url('https://cravings.ricr.in/foodTable.webp')] bg-cover bg-center relative ">
        <form
          className="bg-white absolute left-10 top-20 lg:left-20 px-10 py-5 rounded space-y-2 w-85 "
          onSubmit={submitForm}
        >
          <h1 className="text-center text-(--color-primary) text-xl font-bold">
            Welcome Back
          </h1>
          <div className="text-center text-(--color-secondary) text-[12px]">
            Login to your Cravings account
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="emailLogin" className="text-[12px] font-semibold">
              Email
            </label>
            <input
              type="email"
              name="emailLogin"
              id="emailLogin"
              required
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
              className="border border-(--color-base-300) rounded px-2 py-1 text-[12px]"
              placeholder="Enter your Email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="passwordLogin"
              className="text-[12px] font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              name="passwordLogin"
              id="passwordLogin"
              required
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              className="border border-(--color-base-300) rounded px-2 py-1 text-[12px]"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label
                htmlFor="rememberMe"
                className=" text-(--color-secondary) text-[12px]"
              >
                Remember Me
              </label>
            </div>

            <div className="text-(--color-primary) text-[12px]">
              Forget Password?
            </div>
          </div>

          <button
            className="w-full px-3 py-2 bg-(--color-primary) text-white text-center rounded my-2"
            type="submit"
          >
            Login
          </button>

          <div className="flex items-center gap-1 text-(--color-secondary) text-[12px]">
            <hr className="grow" />
            <p>Don't have an account?</p>
            <hr className="grow" />
          </div>

          <div className="text-center font-semibold text-(--color-primary) text-[12px] hover:underline" onClick={()=>{navigate("/register")}}>
            Create an Account
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
