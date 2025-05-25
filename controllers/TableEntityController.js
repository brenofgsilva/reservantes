const pool = require("../config/database");

// Criar mesa
exports.criarMesa = async (req, res) => {
  const { restaurant_id, seats, table_number } = req.body;
  const query = `
    INSERT INTO TableEntity (restaurant_id, seats, table_number)
    VALUES ($1, $2, $3) RETURNING *;
  `;
  try {
    const result = await pool.query(query, [
      restaurant_id,
      seats,
      table_number,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar mesas
exports.listarMesas = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM TableEntity");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar mesa
exports.editarMesa = async (req, res) => {
  const { id } = req.params;
  const { restaurant_id, seats, table_number } = req.body;
  const query = `
    UPDATE TableEntity SET restaurant_id=$1, seats=$2, table_number=$3
    WHERE id=$4 RETURNING *;
  `;
  try {
    const result = await pool.query(query, [
      restaurant_id,
      seats,
      table_number,
      id,
    ]);
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Mesa não encontrada" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir mesa
exports.excluirMesa = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM TableEntity WHERE id = $1 RETURNING *`;
  try {
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Mesa não encontrada" });
    res.json({ message: "Mesa excluída com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
