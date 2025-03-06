const Livro = require('../models/Livro');

exports.obterTodosLivros = async (req, res) => {
    try {
        const livros = await Livro.findAll();
        res.json(livros);
    } catch (error) {
        res.status(500).send('Erro ao buscar livros');
    }
};

exports.obterLivroPorId = async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (!livro) return res.status(404).send('Livro não encontrado');
        res.json(livro);
    } catch (error) {
        res.status(500).send('Erro ao buscar livro');
    }
};

exports.criarLivro = async (req, res) => {
    try {
        const livro = await Livro.create({
            title: req.body.title,
            author: req.body.author
        });
        res.status(201).json(livro);
    } catch (error) {
        res.status(500).send('Erro ao criar livro');
    }
};

exports.atualizarLivro = async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (!livro) return res.status(404).send('Livro não encontrado');

        livro.title = req.body.title;
        livro.author = req.body.author;
        await livro.save();

        res.json(livro);
    } catch (error) {
        res.status(500).send('Erro ao atualizar livro');
    }
};

exports.deletarLivro = async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (!livro) return res.status(404).send('Livro não encontrado');

        await livro.destroy();
        res.json(livro);
    } catch (error) {
        res.status(500).send('Erro ao deletar livro');
    }
};