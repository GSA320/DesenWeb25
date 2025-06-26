import React, { useEffect, useRef } from "react";
import axios from "axios";
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
  max-width: 900px;
  margin: auto;
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

const Form = ({ getBarbeiro, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    const form = ref.current;

    if (onEdit) {
      form.nome.value = onEdit.nome || "";
      form.email.value = onEdit.email || "";
      form.telefone.value = onEdit.telefone || "";
      form.data_nascimento.value = onEdit.data_nascimento || "";
      form.especialidade.value = onEdit.especialidade || "";
      form.disponibilidade.value = onEdit.disponibilidade_horarios || "";
    } else {
      form.nome.value = "";
      form.email.value = "";
      form.telefone.value = "";
      form.data_nascimento.value = "";
      form.especialidade.value = "";
      form.disponibilidade.value = "";
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = ref.current;

    const data = {
      nome: form.nome.value,
      email: form.email.value,
      telefone: form.telefone.value,
      data_nascimento: form.data_nascimento.value,
      especialidade: form.especialidade.value,
      disponibilidade_horarios: form.disponibilidade.value,
    };

    // Validação
    if (Object.values(data).some((v) => v.trim() === "")) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/CadastroBarbeiro/${onEdit.id}`, data);
        toast.success("Barbeiro atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8800/CadastroBarbeiro", data);
        toast.success("Barbeiro cadastrado com sucesso!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Erro ao salvar dados do barbeiro.");
    }

    setOnEdit(null);
    getBarbeiro();

    // Limpa os campos
    form.nome.value = "";
    form.email.value = "";
    form.telefone.value = "";
    form.data_nascimento.value = "";
    form.especialidade.value = "";
    form.disponibilidade.value = "";
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

      <InputArea>
        <Label>Especialidade</Label>
        <Input name="especialidade" placeholder="Ex: Corte, Barba" />
      </InputArea>

      <InputArea>
        <Label>Disponibilidade</Label>
        <Input name="disponibilidade" placeholder="Ex: Seg a Sex, 9h-18h" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
