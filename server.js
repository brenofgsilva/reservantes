// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const routes = require("./routes/index.js");
const frontRoutes = require("./routes/fRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

const app = express();
const port = process.env.PORT || 3000;

// Configurar EJS como template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configurar EJS layouts
app.use(expressLayouts);
app.set("layout extractScripts", true);

// Middleware para definir layout dinamicamente
app.use((req, res, next) => {
  // Define o layout padrão como layout/main
  res.locals.layout = "layout/main";

  // Define o layout específico para rotas de autenticação
  if (req.path === "/login" || req.path === "/register") {
    res.locals.layout = "auth/layout";
  }

  next();
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Rotas de autenticação
app.use("/auth", authRoutes);

// Rotas da API
app.use("/api", routes);

// Rotas das views/páginas
app.use("/", frontRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
