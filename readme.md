# Inteli - Instituto de Tecnologia e Liderança

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="assets/assetsWAD/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Reservantes

##

- <a href="https://github.com/brenofgsilva">Breno Farias Gomes da Silva</a>

## Professores:

### Orientador(a)

- <a href="https://www.linkedin.com/in/marcelo-gon%C3%A7alves-phd-a550652/">Marcelo Gonçalves</a>

### Instrutores

- <a href="https://www.linkedin.com/in/cristiano-benites-ph-d-687647a8/">Cristiano Benites</a>
- <a href="https://www.linkedin.com/in/pedroteberga/">Pedro Teberga</a>
- <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a>

## 📝 Descrição

&emsp;Reservantes é uma plataforma inovadora desenvolvida para facilitar e modernizar o processo de reservas de mesas em restaurantes. Pensando na comodidade dos usuários e na eficiência dos estabelecimentos, a ferramenta conecta clientes e restaurantes em poucos cliques, eliminando filas de espera e garantindo experiências gastronômicas mais organizadas e agradáveis.

## 📝 Link de demonstração

[Reservago](https://drive.google.com/drive/folders/1mzE8AwAeNJaKzKIKydYOlkXwjU2sN9Ys)

## 📁 Estrutura de pastas

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

```
.
├── assets/                      # Arquivos públicos, imagens e recursos auxiliares
│   ├── DBdiagram.png            # Diagrama do banco de dados
│   ├── assetsWAD/               # Imagens específicas do projeto/documentação
│   │   ├── arqMVC.png           # Arquitetura MVC em imagem
│   │   └── inteli.png           # Logo Inteli
│   └── prints/                  # Screenshots da aplicação
│       ├── dashboard.png
│       ├── eventos.png
│       ├── mesas.png
│       ├── reservas.png
│       ├── restaurantes.png
│       └── users.png
├── config/                      # Arquivos de configuração do projeto
│   └── database.js              # Configuração da conexão com PostgreSQL (Supabase)
├── controllers/                 # Camada de lógica de negócio
│   ├── AppUserController.js     # Controller para usuários da aplicação
│   ├── AuthController.js        # Controller para autenticação
│   ├── EventController.js       # Controller para eventos
│   ├── ReservationController.js # Controller para reservas
│   ├── RestaurantController.js  # Controller para restaurantes
│   └── TableEntityController.js # Controller para mesas
├── middlewares/                 # Middlewares da aplicação
│   └── auth.js                  # Middleware de autenticação
├── models/                      # Modelos de dados
│   ├── AppUserModel.js          # Modelo para usuários
│   ├── EventModel.js            # Modelo para eventos
│   ├── ReservationModel.js      # Modelo para reservas
│   ├── RestaurantModel.js       # Modelo para restaurantes
│   └── TableEntityModel.js      # Modelo para mesas
├── public/                      # Arquivos estáticos públicos
│   ├── css/                     # Estilos CSS
│   │   ├── auth.css             # Estilos para telas de autenticação
│   │   └── style.css            # Estilos gerais da aplicação
│   └── js/                      # JavaScript client-side
│       ├── api.js               # Funções para chamadas à API
│       ├── auth.js              # Funções de autenticação
│       ├── main.js              # Script principal da aplicação
│       └── utils.js             # Funções utilitárias
├── routes/                      # Definição de rotas
│   ├── appUserRoutes.js         # Rotas para usuários
│   ├── authRoutes.js            # Rotas para autenticação
│   ├── eventRoutes.js           # Rotas para eventos
│   ├── fRoutes.js               # Rotas para front-end (views)
│   ├── index.js                 # Arquivo principal de rotas
│   ├── reservationRoutes.js     # Rotas para reservas
│   ├── restaurantRoutes.js      # Rotas para restaurantes
│   └── TableEntityRoutes.js     # Rotas para mesas
├── scripts/                     # Scripts utilitários
│   ├── createTestUser.js        # Script para criar usuário de teste
│   ├── init.sql                 # Script SQL inicial para banco de dados
│   ├── runSQLScript.js          # Script para executar comandos SQL
│   └── testUser.sql             # Script para criar usuário de teste via SQL
├── services/                    # Serviços da aplicação
│   └── userService.js           # Serviço para operações de usuário
├── tests/                       # Testes automatizados
│   ├── userController.test.js   # Testes para controller de usuário
│   ├── userModel.test.js        # Testes para modelo de usuário
│   ├── userRoutes.test.js       # Testes para rotas de usuário
│   └── userService.test.js      # Testes para serviço de usuário
├── views/                       # Templates do frontend (EJS)
│   ├── auth/                    # Views de autenticação
│   │   ├── layout.ejs           # Layout para páginas de auth
│   │   ├── login.ejs            # Página de login
│   │   └── register.ejs         # Página de registro
│   ├── components/              # Componentes reutilizáveis
│   │   ├── footer.ejs           # Componente de rodapé
│   │   ├── header.ejs           # Componente de cabeçalho
│   │   └── sidebar.ejs          # Componente de menu lateral
│   ├── layout/                  # Layouts principais
│   │   └── main.ejs             # Layout principal da aplicação
│   └── pages/                   # Páginas da aplicação
│       ├── dashboard.ejs        # Página inicial/dashboard
│       ├── eventos.ejs          # Página de eventos
│       ├── mesas.ejs            # Página de mesas
│       ├── reservas.ejs         # Página de reservas
│       ├── restaurantes.ejs     # Página de restaurantes
│       └── usuarios.ejs         # Página de usuários
├── .env                         # Variáveis de ambiente (não versionado)
├── .gitignore                   # Arquivos ignorados pelo git
├── jest.config.js               # Configuração de testes
├── package-lock.json            # Lockfile de dependências
├── package.json                 # Configuração do projeto e dependências
├── readme.md                    # Documentação do projeto
├── rest.http                    # Arquivo para testar endpoints via extensão REST
├── server.js                    # Arquivo principal da aplicação
└── WAD.md                       # Web Application Document
```

## 💻 Configuração para desenvolvimento e execução do código

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1. Baixar e instalar o node.js: [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2. Clone o repositório em questão.

```bash
git clone https://github.com/brenofgsilva/reservantes.git
```

3. Dentro do repositório, abra um novo terminal e rode;

```sh
npm install
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

    ```bash
    npm run init-db    # Inicializa o banco de dados com as tabelas necessárias
    npm run init-app   # Inicia o servidor da aplicação
    ```

4. Agora você pode acessar a aplicação através do link http://localhost:5500
5. O servidor está online.

## 🗃 Histórico de lançamentos

- ## 0.5.0 - XX/XX/2024
- ## 0.4.0 - XX/XX/2024
- ## 0.3.0 - 15/06/2025 - Entrega Final da Aplicação Web.
- ## 0.2.0 - 25/05/2025 - Segundo rascunho da Aplicação Web.
- ## 0.1.0 - 09/05/2025 - Primeiro rascunho da Aplicação Web.

## 📋 Licença/License
