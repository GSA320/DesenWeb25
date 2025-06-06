import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/agendamentoForm.js";
import Grid from "./components/agendamentoGrid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 40px 20px 0 20px;
`;

const Title = styled.h2``;

function AgendamentoApp() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getAgendamentos = async () => {
    try {
     const res = await axios.get("http://localhost:8800/api/agendamentos", {
      headers: { "Cache-Control": "no-cache" }
    });
      setAgendamentos(
        res.data.sort((a, b) =>
          new Date(a.data) > new Date(b.data) ? 1 : -1
        )
      );
    } catch (error) {
       console.error("Erro ao buscar agendamentos:", error);
      toast.error("Erro ao buscar agendamentos.");
    }
  };

  useEffect(() => {
    getAgendamentos();
  }, []);

  return (
    <>
      <Container>
        <Title>AGENDAMENTOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getAgendamentos={getAgendamentos} />
        <Grid agendamentos={agendamentos} setAgendamentos={setAgendamentos} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default AgendamentoApp;
