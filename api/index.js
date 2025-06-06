import express from "express";
import cors from "cors";
import clienteRoutes from "./routes/clientes.js";
import agendamentoRoutes from "./routes/agendamentos.js";

const app = express();

app.use(express.json());
app.use(cors());

// Prefixos organizados
app.use("/api/clientes", clienteRoutes);
app.use("/api/agendamentos", agendamentoRoutes);

app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});
