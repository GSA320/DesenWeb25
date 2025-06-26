import express from "express";
import { getClientes, addClientes, updateClientes, deleteClientes } from "../controllers/clientes.js";

const router = express.Router()

router.get("/", getClientes);

router.post("/", addClientes);

router.put("/:id", updateClientes);

router.delete("/:id", deleteClientes);

export default router; 
