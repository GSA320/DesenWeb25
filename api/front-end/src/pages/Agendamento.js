import GlobalStyle from "../styles/global.js";
import styled from "styled-components";
import Form from "../agendamentoComponents/Form.js";
import Grid from "../agendamentoComponents/Grid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from 'react-router-dom';

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

function Agendamento() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [barbeiros, setBarbeiros] = useState([]); // Adicionando o estado para barbeiros
  const [onEdit, setOnEdit] = useState(null);

  // Função para obter os agendamentos
  const getAgendamentos = async () => {
    try {
      const res = await axios.get("http://localhost:8800/Agendamento", {
        headers: { "Cache-Control": "no-cache" },
      });
      setAgendamentos(
        res.data.sort((a, b) => (new Date(a.data) > new Date(b.data) ? 1 : -1))
      );
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
      toast.error("Erro ao buscar agendamentos.");
    }
  };

  const getBarbeiros = async () => {
    try {
      const res = await axios.get("http://localhost:8800/CadastroBarbeiro"); 
      setBarbeiros(res.data); 
    } catch (error) {
      console.error("Erro ao buscar barbeiros:", error);
      toast.error("Erro ao buscar barbeiros.");
    }
  };

  // UseEffect para buscar os agendamentos e barbeiros
  useEffect(() => {
    getAgendamentos();
    getBarbeiros();
  }, []);

  return (
    <>
    <Link to="/">
      <button style={styles.button}>Home</button>
    </Link>
      <Container>
        <Title>AGENDAMENTOS</Title>
        {/* Passando os barbeiros para o Form */}
        <Form
          onEdit={onEdit}
          setOnEdit={setOnEdit}
          getAgendamentos={getAgendamentos}
          barbeiros={barbeiros} // Passando a lista de barbeiros
        />
        
        <Grid
          agendamentos={agendamentos}
          setAgendamentos={setAgendamentos}
          setOnEdit={setOnEdit}
        />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#f59e0b",
    color: "black",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
export default Agendamento;
