import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import ClienteApp from "./clienteApp";
import AgendamentoApp from "./agendamentoApp";

const App = () => {
  return (
    <>
      <nav style={{ padding: 20 }}>
        <Link to="/clientes" style={{ marginRight: 20 }}>Clientes</Link>
        <Link to="/agendamentos">Agendamentos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/clientes" />} />
        <Route path="/clientes" element={<ClienteApp />} />
        <Route path="/agendamentos" element={<AgendamentoApp />} />
      </Routes>
    </>
  );
};

export default App;
