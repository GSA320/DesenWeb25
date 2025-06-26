import express from "express";
import { getAgendamentos, addAgendamentos, updateAgendamentos, deleteAgendamentos } from "../controllers/agendamentos.js";

const router = express.Router()

router.get("/", getAgendamentos);

router.post("/", addAgendamentos);

router.put("/:id", updateAgendamentos);

router.delete("/:id", deleteAgendamentos);

export default router; 
