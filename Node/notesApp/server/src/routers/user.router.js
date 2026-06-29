import express from "express";
import { deleteUserNote, editUserNote, getUserNote, postUserNote } from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/notes", getUserNote);
router.post("/notes", postUserNote);
router.delete("/notes", deleteUserNote);
router.put("/notes", editUserNote);

export default router;
