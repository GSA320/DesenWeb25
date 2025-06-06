import { db } from "../db.js";

// Buscar todos os agendamentos
export const getAgendamentos = (_, res) => {
  const q = "SELECT * FROM agendamentos";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

// Adicionar novo agendamento
export const addAgendamento = (req, res) => {
  const q = "INSERT INTO agendamentos (`data`, `horario`, `barbeiro`, `tipo_servico`) VALUES (?)";

  const values = [
    req.body.data,
    req.body.horario,
    req.body.barbeiro,
    req.body.tipo_servico,
  ];

  db.query(q, [values], (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json("Já existe um agendamento nesse horário para esse barbeiro.");
      }
      return res.status(500).json(err);
    }

    return res.status(200).json("Agendamento criado com sucesso.");
  });
};

// Atualizar agendamento
export const updateAgendamento = (req, res) => {
  const q = "UPDATE agendamentos SET `data` = ?, `horario` = ?, `tipo_servico` = ?, `barbeiro` = ? WHERE `id` = ?";

  const values = [
    req.body.data,
    req.body.horario,
    req.body.tipo_servico,
    req.body.barbeiro,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json("Já existe um agendamento nesse horário para esse barbeiro.");
      }
      return res.status(500).json(err);
    }

    return res.status(200).json("Agendamento atualizado com sucesso.");
  });
};

// Deletar agendamento
export const deleteAgendamento = (req, res) => {
  const q = "DELETE FROM agendamentos WHERE `id` = ?";

  db.query(q, [req.params.id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Erro ao deletar agendamento." });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Agendamento não encontrado." });
    }
    return res.status(200).json({ message: "Agendamento deletado com sucesso." });
  });
};
