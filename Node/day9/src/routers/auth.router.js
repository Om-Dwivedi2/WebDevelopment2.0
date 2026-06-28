import express from "express"
import { registerUser, getRegisterUser, LoginUser } from "../controllers/auth.controller.js";
import { sampleMiddleWare, sampleMiddleWare2 } from "../middlewares/auth.middleware.js";



export const router = express.Router();


router.post("/register" ,sampleMiddleWare, registerUser);
router.get("/getRegister" , sampleMiddleWare, sampleMiddleWare2, getRegisterUser);
router.get("/login", sampleMiddleWare2, LoginUser);

