import express from "express"
import { registerUser, getRegisterUser, LoginUser } from "../controllers/auth.controller.js";

export const router = express.Router();


router.post("/register" , registerUser);
router.get("/getRegister" , getRegisterUser);
router.get("/login", LoginUser)

