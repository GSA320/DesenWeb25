import axios from "axios";
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

const Form = ({ getAgendamentos, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const agendamento = ref.current;

      agendamento.data.value = onEdit.data;
      agendamento.horario.value = onEdit.horario;
      agendamento.tipo_servico.value = onEdit.tipo_servico;
      agendamento.barbeiro.value = onEdit.barbeiro;
    }
  }, [onEdit]);

  useEffect(() => {
    if (!onEdit && ref.current) {
      ref.current.data.value = "";
      ref.current.horario.value = "";
      ref.current.tipo_servico.value = "";
      ref.current.barbeiro.value = "";
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const agendamento = ref.current;

    if (
      !agendamento.data.value ||
      !agendamento.horario.value ||
      !agendamento.tipo_servico.value ||
      !agendamento.barbeiro.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    const payload = {
      data: agendamento.data.value,
      horario: agendamento.horario.value,
      tipo_servico: agendamento.tipo_servico.value,
      barbeiro: agendamento.barbeiro.value,
    };

    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/api/agendamentos/${onEdit.id}`, payload);
        toast.success("Agendamento atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8800/api/agendamentos", payload);
        toast.success("Agendamento criado com sucesso!");
      }

      setOnEdit(null);
      agendamento.data.value = "";
      agendamento.horario.value = "";
      agendamento.tipo_servico.value = "";
      agendamento.barbeiro.value = "";

      getAgendamentos();
    } catch (err) {
      toast.error(err.response?.data || "Erro ao salvar agendamento!");
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Data</Label>
        <Input name="data" type="date" />
      </InputArea>
      <InputArea>
        <Label>Horário</Label>
        <Input name="horario" type="time" />
      </InputArea>
      <InputArea>
        <Label>Tipo de Serviço</Label>
        <Input name="tipo_servico" />
      </InputArea>
      <InputArea>
        <Label>Barbeiro</Label>
        <Input name="barbeiro" />
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
