const db = require("../config/database");

class AppUser {
  static async create({ name, email, password }) {
    const query = `
      INSERT INTO "AppUser" (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, email, password];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async getAll() {
    const result = await db.query('SELECT * FROM "AppUser"');
    return result.rows;
  }

  static async update(id, { name, email, password }) {
    const query = `
      UPDATE "AppUser"
      SET name = $1, email = $2, password = $3
      WHERE id = $4
      RETURNING *;
    `;
    const values = [name, email, password, id];
    const result = await db.query(query, values);
    return result.rows[0]; // pode ser undefined se não encontrar
  }

  static async delete(id) {
    const result = await db.query(
      'DELETE FROM "AppUser" WHERE id = $1 RETURNING *;',
      [id]
    );
    return result.rows[0]; // pode ser undefined se não encontrar
  }
}

module.exports = AppUser;
