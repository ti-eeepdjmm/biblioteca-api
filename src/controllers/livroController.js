const Livro = require('../models/Livro');

// Função para obter todos os livros
exports.obterTodosLivros = async (req, res) => {
    try {
        // Busca todos os livros no banco de dados
        const livros = await Livro.findAll();
        // Retorna a lista de livros em formato JSON
        res.json(livros);
    } catch (error) {
        // Retorna um erro 500 se ocorrer um problema na busca
        res.status(500).send(`Erro ao buscar livros: ${error}`);
    }
};

// Função para obter um livro pelo ID
exports.obterLivroPorId = async (req, res) => {
    try {
        // Busca um livro pelo ID no banco de dados
        const livro = await Livro.findByPk(req.params.id);
        if (!livro) return res.status(404).send('Livro não encontrado');
        // Retorna o livro encontrado em formato JSON
        res.status(200).json(livro);
    } catch (error) {
        // Retorna um erro 500 se ocorrer um problema na busca
        res.status(500).send(`Erro ao buscar livro: ${error}`);
    }
};

// Função para criar um novo livro
exports.criarLivro = async (req, res) => {
    try {
        // Cria um novo livro com os atributos do corpo da requisição
        const novoLivro = await Livro.create(req.body);
        // Retorna o livro criado em formato JSON com status 201
        res.status(200).json({ message: 'Livro cadastrado com sucesso.', livro: novoLivro });
    } catch (error) {
        // Retorna um erro 500 se ocorrer um problema na criação
        res.status(500).send(`Erro ao criar livro: ${error}`);
    }
};

// Função para atualizar um livro existente
exports.atualizarLivro = async (req, res) => {
    try {
        // Busca um livro pelo ID no banco de dados
        const livro = await Livro.findByPk(req.params.id);
        if (!livro) return res.status(404).send('Livro não encontrado');

        // Salva as alterações no banco de dados
        await livro.update(req.body);
        // Retorna o livro atualizado em formato JSON
        res.status(200).json({ message: 'Livro atualizado com sucesso.', livro });
    } catch (error) {
        // Retorna um erro 500 se ocorrer um problema na atualização
        res.status(500).send(`Erro ao atualizar livro: ${error}`);
    }
};

// Função para deletar um livro
exports.deletarLivro = async (req, res) => {
    try {
        // Busca um livro pelo ID no banco de dados
        const livro = await Livro.findByPk(req.params.id);
        if (!livro) return res.status(404).json({ error: 'Livro não encontrado.' });

        // Deleta o livro do banco de dados
        await livro.destroy();
        // Retorna uma mensagem de sucesso em formato JSON
        return res.status(200).json({ message: 'Livro deletado com sucesso.' });
    } catch (error) {
        // Retorna um erro 500 se ocorrer um problema na deleção
        res.status(500).send(`Erro ao deletar livro: ${error}`);
    }
};