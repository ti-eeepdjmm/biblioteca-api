const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

// Rota para obter todos os livros
router.get('/', livroController.obterTodosLivros);

// Rota para obter um livro pelo ID
router.get('/:id', livroController.obterLivroPorId);

// Rota para adicionar um novo livro
router.post('/', livroController.criarLivro);

// Rota para atualizar um livro existente
router.put('/:id', livroController.atualizarLivro);

// Rota para deletar um livro
router.delete('/:id', livroController.deletarLivro);

module.exports = router;