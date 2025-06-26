import GlobalStyle from "../styles/global";
import styled from "styled-components";
import Form from "../barberComponents/Form.js";
import Grid from "../barberComponents/Grid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* começa do topo */
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 40px 20px 0 20px; 
`;

const Title = styled.h2``;

function CadastroBarbeiro() {
  const [barbeiro, setBarbeiro] = useState([]); // Inicia como um array vazio
  const [onEdit, setOnEdit] = useState(null);
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const getBarbeiro = async () => {
    setLoading(true); // Inicia o carregamento
    try {
      const res = await axios.get("http://localhost:8800/Cadastrobarbeiro");
      setBarbeiro(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1))); // Ordenando os barbeiros por nome
    } catch (error) {
      console.error("Erro completo:", error);
      toast.error("Erro ao carregar os barbeiros: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  useEffect(() => {
    getBarbeiro(); 
  }, []); 

  return (
    <>

<Link to="/">
      <button style={styles.button}>Home</button>
    </Link>

      <h1 style={{ color: "black" }}></h1>
      <Container>
        <Title>Barbeiros</Title>
        {/* Passando as funções de edição e dados dos barbeiros para o Form */}
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getBarbeiro={getBarbeiro} />
        
        {/* Exibindo indicador de carregamento ou os barbeiros */}
        {loading ? (
          <p>Carregando...</p>
        ) : barbeiro.length === 0 ? (
          <p>Nenhum barbeiro encontrado</p>
        ) : (
          <Grid barbeiro={barbeiro} setBarbeiro={setBarbeiro} setOnEdit={setOnEdit} />
        )}
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

export default CadastroBarbeiro;
