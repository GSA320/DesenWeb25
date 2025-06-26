import { db } from "../db.js";

// Obter todos os barbeiros
export const getBarbeiros = (_, res) => {
  const f = "SELECT * FROM barbeiro";

  db.query(f, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

// Adicionar um novo barbeiro
export const addBarbeiros = (req, res) => {
  const q = 
    "INSERT INTO barbeiro(`nome`, `email`, `telefone`, `data_nascimento`, `especialidade`, `disponibilidade_horarios`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
    req.body.especialidade,
    req.body.disponibilidade_horarios,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Barbeiro criado com sucesso.");
  });
};

// Atualizar os dados de um barbeiro
export const updateBarbeiros = (req, res) => {
  const q = 
    "UPDATE barbeiro SET `nome` = ?, `email` = ?, `telefone` = ?, `data_nascimento` = ?, `especialidade` = ?, `disponibilidade_horarios` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
    req.body.especialidade,
    req.body.disponibilidade_horarios,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Barbeiro atualizado com sucesso.");
  });
};

// Deletar um barbeiro
export const deleteBarbeiros = (req, res) => {
  const q = "DELETE FROM barbeiro WHERE `id` = ?";

  db.query(q, [req.params.id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Erro no banco ao deletar barbeiro." });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Barbeiro não encontrado." });
    }
    return res.status(200).json({ message: "Barbeiro deletado com sucesso." });
  });
};
