'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert({ tableName: 'livro', schema: 'biblioteca' }, [
      {
        titulo: '1984',
        autor: 'George Orwell',
        ano: 1949,
        editora: 'Secker & Warburg',
        isbn: '978-0451524935',
        quantidade_disponivel: 5
      },
      {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        ano: 1954,
        editora: 'Allen & Unwin',
        isbn: '978-0544003415',
        quantidade_disponivel: 3
      },
      {
        titulo: 'Dom Quixote',
        autor: 'Miguel de Cervantes',
        ano: 1605,
        editora: 'Francisco de Robles',
        isbn: '978-0060934347',
        quantidade_disponivel: 4
      },
      {
        titulo: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry',
        ano: 1943,
        editora: 'Reynal & Hitchcock',
        isbn: '978-0156012195',
        quantidade_disponivel: 7
      },
      {
        titulo: 'Moby Dick',
        autor: 'Herman Melville',
        ano: 1851,
        editora: 'Harper & Brothers',
        isbn: '978-1503280786',
        quantidade_disponivel: 2
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'livro', schema: 'biblioteca' }, null, {});
  }
};