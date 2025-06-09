const db = require("../config/database");

class Reservation {
  static async create({ user_id, event_id, num_guests, status = "pending" }) {
    const query = `
      INSERT INTO Reservation (user_id, event_id, num_guests, status)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [user_id, event_id, num_guests, status];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async getAll() {
    const result = await db.query("SELECT * FROM Reservation");
    return result.rows;
  }

  static async update(id, { user_id, event_id, num_guests, status }) {
    const query = `
      UPDATE Reservation
      SET user_id = $1, event_id = $2, num_guests = $3, status = $4
      WHERE id = $5
      RETURNING *;
    `;
    const values = [user_id, event_id, num_guests, status, id];
    const result = await db.query(query, values);
    return result.rows[0]; // retorna undefined se não encontrar
  }

  static async delete(id) {
    const result = await db.query(
      "DELETE FROM Reservation WHERE id = $1 RETURNING *;",
      [id]
    );
    return result.rows[0]; // retorna undefined se não encontrar
  }
}

module.exports = Reservation;
