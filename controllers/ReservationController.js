const pool = require("../config/database");

// Criar uma nova reserva
exports.criarReserva = async (req, res) => {
  const { user_id, event_id, num_guests, status } = req.body;

  const query = `
    INSERT INTO Reservation (user_id, event_id, num_guests, status)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [user_id, event_id, num_guests, status || "pending"];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as reservas
exports.listarReservas = async (req, res) => {
  const query = "SELECT * FROM Reservation";

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma reserva
exports.editarReserva = async (req, res) => {
  const { id } = req.params;
  const { user_id, event_id, num_guests, status } = req.body;

  const query = `
    UPDATE Reservation
    SET user_id = $1, event_id = $2, num_guests = $3, status = $4
    WHERE id = $5
    RETURNING *;
  `;

  const values = [user_id, event_id, num_guests, status, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Reserva não encontrada" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar uma reserva
exports.excluirReserva = async (req, res) => {
  const { id } = req.params;

  const query = `
    DELETE FROM Reservation
    WHERE id = $1
    RETURNING *;
  `;

  try {
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Reserva não encontrada" });
    }
    res.status(200).json({ message: "Reserva deletada com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
