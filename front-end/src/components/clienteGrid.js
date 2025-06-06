import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
 width:100%;
 background-color: #fff;
 padding: 20px;
 box-shadow: 0px 0px 5px #ccc;
 border-radius: 5px;
 max-width: 800px;
 margin: 20px auto;
 word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  padding-right: 10px;

  @media (max-width: 500px){
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};  

  @media (max-width: 500px){
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ cliente, setCliente, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

const handleDelete = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8800/api/clientes/${id}`);
    
    if (response.status >= 200 && response.status < 300) {
      setCliente(prev => prev.filter(cliente => cliente.id !== id));
      toast.success("Cliente excluído com sucesso!");
      setOnEdit(null);
    } else {
      throw new Error("Resposta não bem-sucedida");
    }
  } catch (err) {
    console.error("Erro ao excluir cliente:", err);
    toast.error(err.response?.data?.message || "Erro ao excluir cliente!");
  }
};

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
          <Th></Th>
          <Th></Th>                                         
        </Tr>
      </Thead>
      <Tbody>
       {cliente.map((item, i) => (
        <Tr key={i}>  
          <Td width="30%">{item.nome}</Td>
          <Td width="30%">{item.email}</Td>
          <Td width="20%" onlyWeb>
            {item.telefone}</Td>
             <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
             </Td>
             <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)}/>
             </Td>             
          </Tr>
      ))}
      </Tbody>
    </Table>
  );
}

export default Grid;