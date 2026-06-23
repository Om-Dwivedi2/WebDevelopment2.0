import express from "express"
import { contact_now } from "../controllers/public.controller.js";

const router = express.Router();
router.post("/contact", contact_now);


export default router;