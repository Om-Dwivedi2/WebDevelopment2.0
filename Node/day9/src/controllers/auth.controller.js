import User from "../models/registerModel.js";

export const registerUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, gender, password, dob } = req.body;

    if (!fullName || !email || !phone || !gender || !password || !dob) {
      const error = new Error("Fill all entries: ");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // res.status(409).json("User Already exist");
      // return;

      const error = new Error("User already exist");
      error.statusCode = 409;
      return next(error);
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
    console.log(error.message);
    next();
  }
};

export const getRegisterUser = async (req, res) => {
  const data = await User.find();

  res
    .status(200)
    .json({ message: "Registered data retrieved successfully", data: data });
};

export const LoginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      const error = new Error("All Field Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = User.find({ email });

    if (!existingUser) {
      const error = new Error("User is not registered");
      error.statusCode = 404;
      return next(error);
    }

    if (existingUser.password != password) {
      const error = new Error("Password entered is incorrect");
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({ message: "Welcome Back", data: existingUser });
  } catch (error) {
    console.log(error.message);
    next();
  }
};
