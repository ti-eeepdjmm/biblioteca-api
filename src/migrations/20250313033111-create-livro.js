'use strict';

module.exports = {
  // Função executada quando a migration é aplicada (cria a tabela)
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      {
        // Define o nome da tabela e o schema onde ela será criada
        tableName: 'livro',
        schema: 'biblioteca'
      },
      {
        // Coluna 'id' como chave primária auto-incrementável
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        // Coluna 'titulo' do livro (campo obrigatório)
        titulo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        // Coluna 'autor' do livro (campo obrigatório)
        autor: {
          type: Sequelize.STRING,
          allowNull: false
        },
        // Coluna 'ano' de publicação (campo obrigatório)
        ano: {
          type: Sequelize.INTEGER,
          allowNull: false
          // OBS: validações como min: 1 não são aplicadas no banco via migration
        },
        // Coluna 'editora' (campo opcional)
        editora: {
          type: Sequelize.STRING
        },
        // Coluna 'isbn' (campo obrigatório e único)
        isbn: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        // Coluna 'quantidade_disponivel' (campo obrigatório)
        quantidade_disponivel: {
          type: Sequelize.INTEGER,
          allowNull: false
          // OBS: validações como min: 0 não são aplicadas no banco via migration
        }
      }
    );
  },

  // Função executada quando a migration é desfeita (deleta a tabela)
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      // Remove a tabela 'livro' do schema 'biblioteca'
      tableName: 'livro',
      schema: 'biblioteca'
    });
  }
};
