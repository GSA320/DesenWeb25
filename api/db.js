import mysql from "mysql2"

export const db = mysql.createConnection({
  host: "localhost",
  user: "usuario_app",
  password: "admin",
  database: "meu_banco_de_dados",
})