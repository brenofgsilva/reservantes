const pool = require("../config/database");

// Criar um novo restaurante
exports.criarRestaurante = async (req, res) => {
  const { name, description, location, contact_info, owner_id } = req.body;

  const query = `
    INSERT INTO Restaurant (name, description, location, contact_info, owner_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [name, description, location, contact_info, owner_id];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os restaurantes
exports.listarRestaurantes = async (req, res) => {
  const query = "SELECT * FROM Restaurant";

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar um restaurante
exports.editarRestaurante = async (req, res) => {
  const { id } = req.params;
  const { name, description, location, contact_info, owner_id } = req.body;

  const query = `
    UPDATE Restaurant
    SET name = $1, description = $2, location = $3, contact_info = $4, owner_id = $5
    WHERE id = $6
    RETURNING *;
  `;

  const values = [name, description, location, contact_info, owner_id, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Restaurante não encontrado" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar um restaurante
exports.excluirRestaurante = async (req, res) => {
  const { id } = req.params;

  const query = `
    DELETE FROM Restaurant
    WHERE id = $1
    RETURNING *;
  `;

  try {
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Restaurante não encontrado" });
    }
    res.status(200).json({ message: "Restaurante excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
