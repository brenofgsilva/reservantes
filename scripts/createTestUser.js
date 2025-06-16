// scripts/createTestUser.js
require("dotenv").config();
const bcrypt = require("bcrypt");
const { Pool } = require("pg");

// Create a pool with explicit settings from .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
});

async function createTestUser() {
  try {
    console.log("Connecting to database...");

    // First, let's check if the table exists
    try {
      const tableCheck = await pool.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_name = 'AppUser'
        );
      `);

      if (!tableCheck.rows[0].exists) {
        console.log(
          "AppUser table does not exist. Please run init-db script first."
        );
        return;
      }
    } catch (error) {
      console.error("Error checking table:", error);
      return;
    }

    // Check table structure
    console.log("Checking table structure...");
    const columnCheck = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'AppUser'
    `);

    console.log("Table structure:", columnCheck.rows);

    // Check if user exists
    const existingUser = await pool.query(
      'SELECT id FROM "AppUser" WHERE email = $1',
      ["admin@example.com"]
    );

    if (existingUser.rows.length > 0) {
      console.log("Test user already exists!");
      return;
    }

    // Hash password
    const saltRounds = 10;
    const password = "password123";
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    console.log("Creating test user...");
    const result = await pool.query(
      'INSERT INTO "AppUser" (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      ["Admin User", "admin@example.com", hashedPassword]
    );

    console.log("Test user created successfully:", result.rows[0]);
    console.log("Email: admin@example.com");
    console.log("Password: password123");
  } catch (error) {
    console.error("Error creating test user:", error);
  } finally {
    // Close database connection
    await pool.end();
    console.log("Database connection closed");
  }
}

createTestUser();
