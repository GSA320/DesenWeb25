import express from "express";
import getClientes from "./routes/clientes.js";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", getClientes)

app.listen(8800)