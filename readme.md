# Inteli - Instituto de Tecnologia e Liderança

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="assets/assetsWAD/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Reservantes

##

- <a href="https://github.com/brenofgsilva">Breno Farias Gomes da Silva</a>

## :teacher: Professores:

### Orientador(a)

- <a href="https://www.linkedin.com/in/marcelo-gon%C3%A7alves-phd-a550652/">Marcelo Gonçalves</a>

### Instrutores

- <a href="https://www.linkedin.com/in/cristiano-benites-ph-d-687647a8/">Cristiano Benites</a>
- <a href="https://www.linkedin.com/in/pedroteberga/">Pedro Teberga</a>
- <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a>

## 📝 Descrição

&emsp;Reservantes é uma plataforma inovadora desenvolvida para facilitar e modernizar o processo de reservas de mesas em restaurantes. Pensando na comodidade dos usuários e na eficiência dos estabelecimentos, a ferramenta conecta clientes e restaurantes em poucos cliques, eliminando filas de espera e garantindo experiências gastronômicas mais organizadas e agradáveis.

## 📝 Link de demonstração

_Coloque aqui o link para seu projeto publicado e link para vídeo de demonstração_

## 📁 Estrutura de pastas

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

```
.
├── assets/                # Arquivos públicos, imagens e recursos auxiliares
│   └── assetsWAD/         # Imagens específicas do projeto/documentação
│       ├── arqMVC.png     # Arquitetura MVC em imagem
│       └── DBdiagram.png  # Diagrama do banco de dados
├── config/                # Arquivos de configuração do projeto
│   └── database.js        # Configuração da conexão com PostgreSQL (Supabase ou Render)
├── controllers/           # Camada de lógica de negócio (controllers da API)
│   ├── AppUserController.js
│   ├── EventController.js
│   ├── ReservationController.js
│   ├── RestaurantController.js
│   ├── TableEntityController.js
│   └── userController.js
├── models/
├── routes/                # Arquivos de definição de rotas HTTP
│   ├── frontRoutes.js
│   ├── index.js
│   └── userRoutes.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
├── rest.http              # Teste de endpoints (opcional)
└── wad.md                 # Documentação

```

## 💻 Configuração para desenvolvimento e execução do código

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1. Baixar e instalar o node.js: [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2. Clone o repositório em questão.
3. No modo administrador, abra o "prompt de comando" ou o "terminal" e, após, abra a pasta "src/backend" no diretório raiz do repositório clonado e digite o segundo comando:

```sh
npm install
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
npm run init-db
```

5. Agora você pode acessar a aplicação através do link http://localhost:3000
6. O servidor está online.

## 🗃 Histórico de lançamentos

- ## 0.5.0 - XX/XX/2024
- ## 0.4.0 - XX/XX/2024
- ## 0.3.0 - XX/XX/2024
- ## 0.2.0 - 25/05/2025 - Segundo rascunho da Aplicação Web.
- ## 0.1.0 - 09/05/2025 - Primeiro rascunho da Aplicação Web.

## 📋 Licença/License
