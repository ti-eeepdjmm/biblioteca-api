const { DataTypes } = require('sequelize');
const sequelize = require('../config/bancoDeDados');

// Define o modelo da tabela 'livros' no banco de dados
const Livro = sequelize.define('livros', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // Título do livro (campo obrigatório)
  titulo: { type: DataTypes.STRING, allowNull: false },
    // Nome do autor do livro (campo obrigatório)
  autor: { type: DataTypes.STRING, allowNull: false },
    // Ano de publicação do livro (deve ser maior que 0)
  ano: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    validate: { min: 1 } 
  },
    // Nome da editora do livro (campo opcional)
  editora: { type: DataTypes.STRING },
    // Código ISBN único do livro (campo obrigatório)
  isbn: { type: DataTypes.STRING, allowNull: false, unique: true },
    // Quantidade de exemplares disponíveis para empréstimo (não pode ser negativo)
  quantidade_disponivel: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    validate: { min: 0 } 
  }
}, {
    // Define o nome da tabela no banco de dados
  tableName: 'livros',
  timestamps: false
});

// Exporta o modelo para ser utilizado em outras partes do código
module.exports = Livro;