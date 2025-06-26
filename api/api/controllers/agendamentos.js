import { db } from "../db.js";

export const getAgendamentos = (_, res) => {
  const q = `SELECT agendamentos.id, agendamentos.data, agendamentos.horario, agendamentos.tipo_servico, barbeiro.nome AS barbeiro
             FROM agendamentos
             LEFT JOIN barbeiro ON agendamentos.barbeiro_id = barbeiro.id`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};


export const addAgendamentos = (req, res) => {
  const q = "INSERT INTO agendamentos (`data`, `horario`, `barbeiro_id`, `tipo_servico`) VALUES (?)";

  const values = [
    req.body.data,
    req.body.horario,
    req.body.barbeiro_id,  
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

export const updateAgendamentos = (req, res) => {
  const q = "UPDATE agendamentos SET `data` = ?, `horario` = ?, `tipo_servico` = ?, `barbeiro_id` = ? WHERE `id` = ?";

  const values = [
    req.body.data,
    req.body.horario,
    req.body.tipo_servico,
    req.body.barbeiro_id,  
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

export const deleteAgendamentos = (req, res) => {
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
