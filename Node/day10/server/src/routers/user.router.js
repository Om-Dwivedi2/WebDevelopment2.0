import express from "express";
import { deleteUserNote, getUserNote, postUserNote } from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/notes", getUserNote);
router.post("/notes", postUserNote);
router.delete("/notes/:id", deleteUserNote);

export default router;
