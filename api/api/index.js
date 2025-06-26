import express from "express";
import bodyParser from 'body-parser';
import clienteRoutes from "./routes/clientes.js";
import barbeiroRoutes from "./routes/barbeiros.js";
import agendamentoRoutes from "./routes/agendamentos.js";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

app.use("/clientes", clienteRoutes);
app.use("/CadastroBarbeiro", barbeiroRoutes);
app.use("/Agendamento", agendamentoRoutes);
//app.use("/Home", homeRoutes);




app.listen(8800)