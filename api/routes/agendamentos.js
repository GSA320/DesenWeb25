import express from "express";
import {
  getAgendamentos,
  addAgendamento,
  updateAgendamento,
  deleteAgendamento
} from "../controllers/agendamentos.js";

const router = express.Router();

router.get("/", getAgendamentos);
router.post("/", addAgendamento);
router.put("/:id", updateAgendamento);
router.delete("/:id", deleteAgendamento);

export default router;
