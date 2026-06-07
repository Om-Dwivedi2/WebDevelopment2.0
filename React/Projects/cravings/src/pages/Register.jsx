import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { GiScooter } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState({
    restaurant: false,
    customer: false,
    rider: false,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  return (
    <>
      <div className="h-[90vh] bg-[url('https://cravings.ricr.in/foodTable.webp')] bg-cover bg-center relative ">
        <form className="bg-white absolute right-10 top-5 lg:right-20 px-10 py-5 rounded space-y-2 w-100 max-h-{80vh} ">
          <h1 className="text-center text-(--color-primary) text-xl font-bold">
            Create Account
          </h1>
          <div className="text-center text-(--color-secondary) text-sm">
            Join us as a Customer, Restaurant, or Rider
          </div>

          <div className="grid grid-cols-3 gap-2 py-2 text-sm text-center">
            <div
              className="flex relative flex-col items-center gap-1 rounded-lg p-1 border border-gray-400"
              style={{
                borderColor: activeRole.customer
                  ? "var(--color-primary)"
                  : "gray",
                backgroundColor: activeRole.customer
                  ? "var(--color-base-100)"
                  : "white",
              }}
              onClick={() => {
                setActiveRole({
                  restaurant: false,
                  customer: true,
                  rider: false,
                });
              }}
            >
              <div className="absolute -top-1.5 -right-1.5 rounded-[50%] p-0.5 bg-white hover:hidden">
                <FaCheckCircle
                  className=" text-(--color-primary) text-[14px]"
                  style={{ display: activeRole.customer ? "block" : "none" }}
                />
              </div>
              <FiUser className="text-3xl text-(--color-primary)" />
              <div className="font-semibold ">Customer</div>
              <p className="text-gray-400 text-[10px]">
                Order food from retaurants
              </p>
            </div>
            <div
              className="flex relative flex-col items-center gap-1 rounded-lg p-1 border border-gray-400"
              style={{
                borderColor: activeRole.restaurant
                  ? "var(--color-primary)"
                  : "gray",
                backgroundColor: activeRole.restaurant
                  ? "var(--color-base-100)"
                  : "white",
              }}
              onClick={() => {
                setActiveRole({
                  restaurant: true,
                  customer: false,
                  rider: false,
                });
              }}
            >
              <div className="absolute -top-1.5 -right-1.5 rounded-[50%] p-0.5 bg-white ">
                <FaCheckCircle
                  className=" text-(--color-primary) text-[14px]"
                  style={{ display: activeRole.restaurant ? "block" : "none" }}
                />
              </div>
              <BsShop className="text-3xl text-(--color-primary)" />
              <div className="font-semibold ">Restaurant</div>
              <p className="text-gray-400 text-[10px]">
                Manage your restaurants & orders
              </p>
            </div>

            <div
              className="flex relative flex-col items-center gap-1  rounded-lg p-1 border border-gray-400"
              style={{
                borderColor: activeRole.rider ? "var(--color-primary)" : "gray",
                backgroundColor: activeRole.rider
                  ? "var(--color-base-100)"
                  : "white",
              }}
              onClick={() => {
                setActiveRole({
                  restaurant: false,
                  customer: false,
                  rider: true,
                });
              }}
            >
              <div className="absolute -top-1.5 -right-1.5 rounded-[50%] p-0.5 bg-white hover:hidden">
                <FaCheckCircle
                  className=" text-(--color-primary) text-[14px]"
                  style={{ display: activeRole.rider ? "block" : "none" }}
                />
              </div>
              <GiScooter className="text-3xl text-(--color-primary)" />
              <div className="font-semibold ">Riders</div>
              <p className="text-gray-400 text-[10px]">
                Deliver Orders earn on the go
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="fullName"
              id="fullNameRegister"
              required
              className="border border-(--color-base-300) rounded px-2 py-1 text-sm focus:outline-(--color-primary) "
              placeholder="Enter your full name"
            />

            <input
              type="email"
              name="emailRegister"
              id="emailRegister"
              required
              className="border border-(--color-base-300) rounded px-2 py-1 text-sm focus:outline-(--color-primary) "
              placeholder="Enter your Email"
            />

            <input
              type="tel"
              name="number"
              id="numberRegister"
              required
              className="border border-(--color-base-300) rounded px-2 py-1 text-sm focus:outline-(--color-primary) "
              placeholder="Enter your phone number"
            />

            <input
              type="password"
              name="passwordLogin"
              id="passwordLogin"
              required
              className="border border-(--color-base-300) rounded px-2 py-1 text-sm focus:outline-(--color-primary) "
              placeholder="Enter your password"
            />

            <input
              type="password"
              name="confirmPasswordRegister"
              id="confirmPasswordRegister"
              required
              className="border border-(--color-base-300) rounded px-2 py-1 text-sm focus:outline-(--color-primary) "
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex items-center gap-1 mt-5">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label
                htmlFor="rememberMe"
                className=" text-(--color-secondary) text-sm"
              >
                I agree to the
              </label>
            </div>

            <div className="text-(--color-primary) text-sm">
              terms and conditions.
            </div>
          </div>

          <button
            className="w-full px-3 py-2 bg-(--color-primary) text-white text-center rounded my-2"
            type="submit"
          >
            Register
          </button>

          <div className="text-center text-(--color-secondary) text-sm ">
            Already Registered?{" "}
            <span
              className="text-(--color-primary) font-semibold hover:underline"
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
