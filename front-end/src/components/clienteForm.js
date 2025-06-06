import axios from  "axios"
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getCliente, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() =>{
   if (onEdit){
    const cliente = ref.current;

    cliente.nome.value = onEdit.nome;
    cliente.email.value = onEdit.email;
    cliente.telefone.value = onEdit.telefone;
    cliente.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);
   
 useEffect(() => {
  if (!onEdit && ref.current) {
    // Limpa os campos quando a edição termina
    ref.current.nome.value = "";
    ref.current.email.value = "";
    ref.current.telefone.value = "";
    ref.current.data_nascimento.value = "";
  }
}, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cliente = ref.current; 

    if(
      !cliente.nome.value ||
      !cliente.email.value ||
      !cliente.telefone.value ||
      !cliente.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!")
    }

    if(onEdit){
      await axios
       .put(`http://localhost:8800/api/clientes/${onEdit.id}`, {
        nome: cliente.nome.value,
        email: cliente.email.value,
        telefone: cliente.telefone.value,
        data_nascimento: cliente.data_nascimento.value,
       })
      .then(({ data }) => {
      toast.success(data);
      setOnEdit(null); // ← move aqui
    })
    .catch((err) => toast.error(err.response?.data || "Erro ao salvar"));
    } else {
      await axios
       .post("http://localhost:8800/api/clientes", {
        nome: cliente.nome.value,
        email: cliente.email.value,
        telefone: cliente.telefone.value,
        data_nascimento: cliente.data_nascimento.value,
       })
     .then(({ data }) => {
      toast.success(data);
      setOnEdit(null); // ← move aqui também
    })
    .catch((err) => toast.error(err.response?.data || "Erro ao salvar"));
}

    cliente.nome.value = "";
    cliente.email.value = "";
    cliente.telefone.value = "";
    cliente.data_nascimento.value = ""; 
    
    setOnEdit(null);
    getCliente();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>Email</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
