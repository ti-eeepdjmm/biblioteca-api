'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Livro.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // Título do livro (campo obrigatório)
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Nome do autor do livro (campo obrigatório)
    autor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Ano de publicação do livro (deve ser maior que 0)
    ano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1 }
    },
    // Nome da editora do livro (campo opcional)
    editora: {
      type: DataTypes.STRING
    },
    // Código ISBN único do livro (campo obrigatório)
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // Quantidade de exemplares disponíveis para empréstimo (não pode ser negativo)
    quantidade_disponivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0 }
    }
  }, {
    sequelize,
    modelName: 'Livro',
    tableName: 'livro',
    schema: 'biblioteca',
    timestamps: false,
    freezeTableName: true
  });
  return Livro;
};