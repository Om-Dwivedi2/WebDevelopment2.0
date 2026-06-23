import { Router } from "express";
import express from "express"
import { loginUser, logoutUser, postLoginUser, registerUser, patchLoginUser } from "../controllers/auth.controller.js";


const router = express.Router();

router.get("/login", loginUser);
router.post("/login", postLoginUser);
router.patch("/login/:id", patchLoginUser);

router.get("/logout", logoutUser);
router.get("/register", registerUser);

export default router;