import mongoose from "mongoose";
import notes from "../models/notesSchema.model.js";

export const getUserNote = async (req, res) => {
  const data = await notes.find();
  res.status(200).json({ message: "Data retrieved successfully:", data: data });
};

export const postUserNote = async (req, res) => {
  const { title, description } = req.body;

  const data = await notes.create({ title, description });

  res.status(201).json({ message: "Data created successfully:", data: data });
};

export const deleteUserNote = async (req, res) => {
  console.log("0");
console.log("req.body: ", req.body);

  const { id } = req.body;

  console.log("id: ", id);

  try {
    const data = await notes.findByIdAndDelete(id);
    console.log("data of deleted: ", data);

    if (!data) {
      console.log("No data foud with given id");
    } else {
      res.status(204).json({ message: "Data deleted successfully:" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
