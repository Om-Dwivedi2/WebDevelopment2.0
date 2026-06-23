import mongoose, { model } from "mongoose";
import { loginModel } from "../models/loginScema.js";

// API
export const loginUser = async (req, res) => {
  const data = await loginModel.find();

  res
    .status(200)
    .json({ message: "successfully logged in from controller", data: data });
};

export const postLoginUser = async (req, res) => {
  const { name, password } = req.body;

  const data = await loginModel.create({ name, password });

  res
    .status(201)
    .json({ message: "successfully created data in login database", data });
};

export const patchLoginUser = async (req, res) => {
  const {password} = req.body;
  const data = await loginModel.findByIdAndUpdate(req.params.id, {password})
  res.status(201).json({ message: "successfully updated login data", data: {password} });
};

export const logoutUser = (req, res) => {
  res.json({ message: "successfully logged out from controller" });
};

export const registerUser = (req, res) => {
  res.json({ message: "successfully registered from controller" });
};
