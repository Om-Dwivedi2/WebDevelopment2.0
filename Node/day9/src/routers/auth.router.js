import express from "express"
import { registerUser, getRegisterUser } from "../controllers/auth.controller.js";

export const router = express.Router();


router.post("/register" , registerUser);
router.get("/getRegister" , getRegisterUser);

