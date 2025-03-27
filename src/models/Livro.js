'use strict';

// Importa a classe base Model do Sequelize
const { Model } = require('sequelize');

// Exporta uma função que recebe a instância do Sequelize e os tipos de dados (DataTypes)
module.exports = (sequelize, DataTypes) => {
  
  // Define a classe Livro, que herda da classe Model do Sequelize
  class Livro extends Model {
    /**
     * Método usado para definir associações com outros modelos.
     * Ele será chamado automaticamente pelo Sequelize no arquivo models/index.js.
     */
    static associate(models) {
      // Aqui poderiam ser definidos relacionamentos como:
      // Livro.hasMany(models.Emprestimo);
    }
  }

  // Inicializa o modelo Livro com seus atributos (colunas)
  Livro.init({
    id: {
      type: DataTypes.INTEGER,        // Tipo inteiro
      primaryKey: true,               // Chave primária
      autoIncrement: true             // Valor autoincrementável
    },
    titulo: {
      type: DataTypes.STRING,         // Texto (varchar)
      allowNull: false                // Campo obrigatório
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1 }            // Validação: ano mínimo 1
    },
    editora: {
      type: DataTypes.STRING          // Campo opcional (não tem `allowNull: false`)
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true                    // Valor único (não pode repetir)
    },
    quantidade_disponivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0 }            // Validação: valor mínimo 0 (não pode ser negativo)
    }
  }, {
    sequelize,                         // Instância do Sequelize (obrigatória)
    modelName: 'Livro',               // Nome do modelo (referência interna)
    tableName: 'livro',               // Nome da tabela no banco de dados
    schema: 'biblioteca',             // Schema em que a tabela está
    timestamps: false,                // Desativa createdAt e updatedAt
    freezeTableName: true             // Não pluraliza o nome da tabela
  });

  return Livro;
};
