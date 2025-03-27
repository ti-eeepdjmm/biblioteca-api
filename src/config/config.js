// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Exporta a configuração do banco de dados para uso com Sequelize ou outra ferramenta
module.exports = {
  // Ambiente de desenvolvimento
  development: {
    // Nome de usuário do banco de dados, vindo da variável de ambiente DB_USER
    username: process.env.DB_USER,

    // Senha do banco de dados, vinda da variável de ambiente DB_PASS
    password: process.env.DB_PASS,

    // Nome do banco de dados, vindo da variável de ambiente DB_NAME
    database: process.env.DB_NAME,

    // Schema a ser usado no PostgreSQL, vindo da variável de ambiente DB_SCHEMA
    schema: process.env.DB_SCHEMA,

    // Host onde o banco de dados está rodando (ex: localhost), vindo de DB_HOST
    host: process.env.DB_HOST,

    // Dialeto usado pelo banco de dados (nesse caso, PostgreSQL)
    dialect: "postgres",

    // Desativa os logs SQL no terminal
    logging: false
  }
};
