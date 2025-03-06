require('dotenv').config();
const { Sequelize } = require('sequelize');

// URI do banco de dados
const databaseUri = process.env.DATABASE_URI;

const sequelize = new Sequelize(databaseUri, {
    dialect: 'postgres',
    logging: false, // Desativa logs de SQL no console
});

module.exports = sequelize;