import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* começa do topo */
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 40px 20px 0 20px; /* dá um espaçamento do topo, sobe o conteúdo */
`;

const Title = styled.h2``;

function App() {
 const [cliente, setCliente] = useState([]);
 const [onEdit, setOnEdit] = useState(null);

 const getCliente = async () =>{
   try{
     const res = await axios.get("http://localhost:8800");
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
      <h1 style={{ color: "black" }}></h1>
      <Container>
        <Title>CLIENTES</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getCliente={getCliente}  />
        <Grid cliente={cliente} setCliente={setCliente} setOnEdit={setOnEdit} />
      </Container>
     <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle/>
    </>
  );
}


export default App;
