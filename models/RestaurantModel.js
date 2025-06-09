const db = require("../config/database");

class Restaurant {
  static async create({ name, description, location, contact_info, owner_id }) {
    const query = `
      INSERT INTO Restaurant (name, description, location, contact_info, owner_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [name, description, location, contact_info, owner_id];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async getAll() {
    const result = await db.query("SELECT * FROM Restaurant");
    return result.rows;
  }

  static async update(
    id,
    { name, description, location, contact_info, owner_id }
  ) {
    const query = `
      UPDATE Restaurant
      SET name = $1, description = $2, location = $3, contact_info = $4, owner_id = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [name, description, location, contact_info, owner_id, id];
    const result = await db.query(query, values);
    return result.rows[0]; // pode ser undefined se não encontrou
  }

  static async delete(id) {
    const result = await db.query(
      "DELETE FROM Restaurant WHERE id = $1 RETURNING *;",
      [id]
    );
    return result.rows[0]; // pode ser undefined se não encontrou
  }
}

module.exports = Restaurant;
