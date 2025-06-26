import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
  gap: 20px; // espaçamento entre os elementos
`;

const Title = styled.h2``;

function App() {
  const [cliente, setCliente] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getCliente = async () => {
    try {
      const res = await axios.get("http://localhost:8800/clientes");
      setCliente(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getCliente();
  }, []);

  return (
    <>
    <Link to="/">
      <button style={styles.button}>Home</button>
    </Link>
      <h1 style={{ color: "black" }}></h1>
      <Container>
        <Title>Gerenciar Clientes</Title>
        
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getCliente={getCliente} />
        <Grid cliente={cliente} setCliente={setCliente} setOnEdit={setOnEdit} />
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

export default App;
