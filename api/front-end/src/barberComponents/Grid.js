import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1000px;
  margin: 20px auto;
  word-break: break-word;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  padding-right: 10px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ barbeiro, setBarbeiro, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8800/CadastroBarbeiro/${id}`);

      if (response.status >= 200 && response.status < 300) {
        setBarbeiro((prev) => prev.filter((b) => b.id !== id));
        toast.success("Barbeiro excluído com sucesso!");
        setOnEdit(null);
      } else {
        throw new Error("Resposta não bem-sucedida");
      }
    } catch (err) {
      console.error("Erro ao excluir barbeiro:", err);
      toast.error(err.response?.data?.message || "Erro ao excluir barbeiro!");
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Telefone</Th>
          <Th onlyWeb>Especialidade</Th>
          <Th onlyWeb>Disponibilidade</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {barbeiro.map((item, i) => (
          <Tr key={i}>
            <Td width="15%">{item.nome}</Td>
            <Td width="20%">{item.email}</Td>
            <Td width="15%" onlyWeb>{item.telefone}</Td>
            <Td width="20%" onlyWeb>{item.especialidade}</Td>
            <Td width="20%" onlyWeb>{item.disponibilidade_horarios}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
