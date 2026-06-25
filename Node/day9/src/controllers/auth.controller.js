import User from "../models/registerModel.js";

export const registerUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, gender, password, dob } = req.body;

    if (!fullName || !email || !phone || !gender || !password || !dob) {
      res.status(400).json("Fill all entries");
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json("User Already exist");
      return;
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      phone,
      gender,
      password,
      dob,
      photo,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getRegisterUser = async (req, res) => {
  const data = await User.find();

  res
    .status(200)
    .json({ message: "Registered data retrieved successfully", data: data });
};
