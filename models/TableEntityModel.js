const db = require("../config/database");

class Table {
  static async create({ restaurant_id, seats, table_number }) {
    const query = `
      INSERT INTO TableEntity (restaurant_id, seats, table_number)
      VALUES ($1, $2, $3) RETURNING *;
    `;
    const result = await db.query(query, [restaurant_id, seats, table_number]);
    return result.rows[0];
  }

  static async getAll() {
    const result = await db.query("SELECT * FROM TableEntity");
    return result.rows;
  }

  static async update(id, { restaurant_id, seats, table_number }) {
    const query = `
      UPDATE TableEntity SET restaurant_id = $1, seats = $2, table_number = $3
      WHERE id = $4 RETURNING *;
    `;
    const result = await db.query(query, [
      restaurant_id,
      seats,
      table_number,
      id,
    ]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query(
      "DELETE FROM TableEntity WHERE id = $1 RETURNING *;",
      [id]
    );
    return result.rows[0]; // retorna a mesa excluída ou undefined
  }
}

module.exports = Table;
