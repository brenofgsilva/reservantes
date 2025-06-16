// controllers/AuthController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/database");
const { JWT_SECRET } = require("../middlewares/auth");

class AuthController {
  // Registrar novo usuário
  static async register(req, res) {
    const { name, email, password } = req.body;

    try {
      // Verificar se o email já existe
      const existingUser = await pool.query(
        'SELECT id FROM "AppUser" WHERE email = $1',
        [email]
      );

      if (existingUser.rows.length > 0) {
        return res.status(400).json({
          error: "Email já está em uso",
        });
      }

      // Validar dados
      if (!name || !email || !password) {
        return res.status(400).json({
          error: "Nome, email e senha são obrigatórios",
        });
      }

      if (password.length < 6) {
        return res.status(400).json({
          error: "Senha deve ter pelo menos 6 caracteres",
        });
      }

      // Hash da senha
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Criar usuário
      const result = await pool.query(
        'INSERT INTO "AppUser" (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
        [name, email, hashedPassword]
      );

      const user = result.rows[0];

      // Gerar token JWT
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      // Se for uma requisição da web (não API), definir cookie e redirecionar
      if (req.accepts("html")) {
        res.cookie("auth_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
          sameSite: "strict",
        });
        return res.redirect("/");
      }

      // Resposta para API
      res.status(201).json({
        message: "Usuário registrado com sucesso",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      console.error("Erro no registro:", error);
      res.status(500).json({
        error: "Erro interno do servidor",
      });
    }
  }

  // Login do usuário
  static async login(req, res) {
    const { email, password } = req.body;

    try {
      // Validar dados
      if (!email || !password) {
        return res.status(400).json({
          error: "Email e senha são obrigatórios",
        });
      }

      // Buscar usuário
      const result = await pool.query(
        'SELECT id, name, email, password FROM "AppUser" WHERE email = $1',
        [email]
      );

      if (result.rows.length === 0) {
        return res.status(401).json({
          error: "Email ou senha incorretos",
        });
      }

      const user = result.rows[0];

      // Verificar senha
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({
          error: "Email ou senha incorretos",
        });
      }

      // Gerar token JWT
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      // Se for uma requisição da web (não API), definir cookie e redirecionar
      if (req.accepts("html")) {
        res.cookie("auth_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
          sameSite: "strict",
        });
        return res.redirect("/");
      }

      // Resposta para API
      res.json({
        message: "Login realizado com sucesso",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      console.error("Erro no login:", error);
      res.status(500).json({
        error: "Erro interno do servidor",
      });
    }
  }

  // Logout do usuário
  static async logout(req, res) {
    res.clearCookie("auth_token");

    if (req.accepts("html")) {
      return res.redirect("/login");
    }

    res.json({ message: "Logout realizado com sucesso" });
  }

  // Verificar se usuário está autenticado
  static async me(req, res) {
    try {
      const userId = req.user.id;

      const result = await pool.query(
        'SELECT id, name, email FROM "AppUser" WHERE id = $1',
        [userId]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          error: "Usuário não encontrado",
        });
      }

      res.json({ user: result.rows[0] });
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      res.status(500).json({
        error: "Erro interno do servidor",
      });
    }
  }
}

module.exports = AuthController;
