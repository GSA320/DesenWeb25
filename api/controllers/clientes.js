import { db } from "../db.js";

export const getClientes = (_,res) => {
  console.log("Rota GET /agendamentos chamada");
  const q = "SELECT * FROM cliente";

  db.query(q, (err, data) => {
     if (err) return res.json(err);


     return res.status(200).json(data);
});
};


export const addClientes = (req, res) => {
 const q = 
    "INSERT INTO cliente(`nome`, `email`, `telefone`, `data_nascimento`) VALUES(?)";

 const values = [
  req.body.nome,
  req.body.email,
  req.body.telefone,
  req.body.data_nascimento,
 ];

 db.query(q, [values], (err) => {
   if (err) return res.json(err);


 return res.status(200).json("Cliente criado com sucesso.");
 });
};


export const updateClientes = (req, res) => {
 const q = 
    "UPDATE cliente SET `nome` = ?, `email` = ?, `telefone` = ?, `data_nascimento` = ? WHERE `id` = ?";

 const values = [
  req.body.nome,
  req.body.email,
  req.body.telefone,
  req.body.data_nascimento,
 ];

 db.query(q, [...values, req.params.id], (err) => {
   if (err) return res.json(err);

 return res.status(200).json("Cliente autualizado com sucesso.");
 });
};


export const deleteClientes = (req, res) => {
  const q = "DELETE FROM cliente WHERE `id` = ?";

  db.query(q, [req.params.id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Erro no banco ao deletar cliente." });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Cliente não encontrado." });
    }
    return res.status(200).json({ message: "Cliente deletado com sucesso." });
  });
}



