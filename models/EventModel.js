const db = require("../config/database");

class Event {
  static async create({
    restaurant_id,
    title,
    description,
    date_time,
    capacity,
    status,
  }) {
    const query = `
      INSERT INTO Event (restaurant_id, title, description, date_time, capacity, status)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [
      restaurant_id,
      title,
      description,
      date_time,
      capacity,
      status,
    ];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async getAll() {
    const result = await db.query("SELECT * FROM Event");
    return result.rows;
  }

  static async update(
    id,
    { restaurant_id, title, description, date_time, capacity, status }
  ) {
    const query = `
      UPDATE Event
      SET restaurant_id = $1,
          title = $2,
          description = $3,
          date_time = $4,
          capacity = $5,
          status = $6
      WHERE id = $7
      RETURNING *;
    `;
    const values = [
      restaurant_id,
      title,
      description,
      date_time,
      capacity,
      status,
      id,
    ];
    const result = await db.query(query, values);
    return result.rows[0]; // retorna undefined se não encontrar
  }

  static async delete(id) {
    const result = await db.query(
      "DELETE FROM Event WHERE id = $1 RETURNING *;",
      [id]
    );
    return result.rows[0]; // retorna undefined se não encontrar
  }
}

module.exports = Event;
