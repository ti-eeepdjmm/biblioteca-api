'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable({
      tableName: 'livro',
      schema: 'biblioteca'
    }, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 1 }
      },
      editora: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      quantidade_disponivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 0 }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      tableName: 'livro',
      schema: 'biblioteca'
    });
  }
};