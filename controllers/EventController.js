const pool = require("../config/database");

// Criar evento
exports.criarEvento = async (req, res) => {
  const { restaurant_id, title, description, date_time, capacity, status } =
    req.body;
  const query = `
    INSERT INTO Event (restaurant_id, title, description, date_time, capacity, status)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
  `;
  try {
    const result = await pool.query(query, [
      restaurant_id,
      title,
      description,
      date_time,
      capacity,
      status,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar eventos
exports.listarEventos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Event");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar evento
exports.editarEvento = async (req, res) => {
  const { id } = req.params;
  const { restaurant_id, title, description, date_time, capacity, status } =
    req.body;
  const query = `
    UPDATE Event SET restaurant_id=$1, title=$2, description=$3, date_time=$4, capacity=$5, status=$6
    WHERE id=$7 RETURNING *;
  `;
  try {
    const result = await pool.query(query, [
      restaurant_id,
      title,
      description,
      date_time,
      capacity,
      status,
      id,
    ]);
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Evento não encontrado" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir evento
exports.excluirEvento = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM Event WHERE id = $1 RETURNING *`;
  try {
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ error: "Evento não encontrado" });
    res.json({ message: "Evento excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
