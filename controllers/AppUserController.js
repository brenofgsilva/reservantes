const pool = require("../config/database");

// Criar usuário
exports.criarUsuario = async (req, res) => {
  const { name, email, password } = req.body;
  const query = `
    INSERT INTO "AppUser" (name, email, password)
    VALUES ($1, $2, $3) RETURNING *;
  `;
  try {
    const result = await pool.query(query, [name, email, password]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar usuários
exports.listarUsuarios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "AppUser"');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar usuário
exports.editarUsuario = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const query = `
    UPDATE "AppUser" SET name=$1, email=$2, password=$3
    WHERE id=$4 RETURNING *;
  `;
  try {
    const result = await pool.query(query, [name, email, password, id]);
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir usuário
exports.excluirUsuario = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM "AppUser" WHERE id = $1 RETURNING *`;
  try {
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Usuário não encontrado" });
    res.json({ message: "Usuário excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
