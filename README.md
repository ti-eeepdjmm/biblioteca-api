# 📚 Biblioteca API

A **Biblioteca API** é uma aplicação de exemplo para gerenciar um acervo de livros. Esta API permite criar, ler, atualizar e deletar informações sobre livros. A aplicação é construída utilizando Node.js, Express, Sequelize e PostgreSQL.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://nodemon.io/)

## 📦 Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/biblioteca-api.git
   cd biblioteca-api
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e adicione a URI do banco de dados:

   ```properties
   DATABASE_URI=postgres://usuario:senha@localhost:5432/nome_do_banco?schema=nome_do_schema
   ```

## 🏃‍♂️ Executando a Aplicação

### Ambiente de Desenvolvimento

Para iniciar a aplicação em ambiente de desenvolvimento com Nodemon:

```sh
npm run dev
```

### Ambiente de Produção

Para iniciar a aplicação em ambiente de produção:

```sh
npm start
```

## 📋 Rotas da API

### Obter Todos os Livros

```http
GET /api/livros
```

### Obter um Livro pelo ID

```http
GET /api/livros/:id
```

### Adicionar um Novo Livro

```http
POST /api/livros
```

#### Corpo da Requisição

```json
{
  "title": "Título do Livro",
  "author": "Autor do Livro"
}
```

### Atualizar um Livro Existente

```http
PUT /api/livros/:id
```

#### Corpo da Requisição

```json
{
  "title": "Novo Título do Livro",
  "author": "Novo Autor do Livro"
}
```

### Deletar um Livro

```http
DELETE /api/livros/:id
```

## 🗃️ Estrutura do Projeto

```plaintext
biblioteca-api/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── livroController.js
│   ├── models/
│   │   └── Livro.js
│   ├── routes/
│   │   └── livroRoutes.js
│   └── App.js
├── .env
├── package.json
├── README.md
└── server.js
```

## 🛠️ Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

