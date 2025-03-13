require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const { Sequelize } = require('sequelize');

// URI do banco de dados obtida das variáveis de ambiente
const databaseUri = process.env.DATABASE_URI;

// Cria uma instância do Sequelize com a URI do banco de dados e configurações adicionais
const sequelize = new Sequelize(databaseUri, {
    dialect: 'postgres', // Define o dialect como PostgreSQL
    logging: false, // Desativa logs de SQL no console
});

// Exporta a instância do Sequelize para ser utilizada em outras partes do código
module.exports = sequelize;