import express from "express";
import { getBarbeiros, addBarbeiros, updateBarbeiros, deleteBarbeiros } from "../controllers/barbeiros.js";

const router = express.Router();

router.get("/", getBarbeiros);

router.post("/", addBarbeiros);

router.put("/:id", updateBarbeiros);

router.delete("/:id", deleteBarbeiros);

export default router;
