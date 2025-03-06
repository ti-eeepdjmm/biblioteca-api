const express = require('express');
const cors = require('cors');
const livroRoutes = require('./routes/livroRoutes');

const app = express();

// Configuração de middleware
app.use(cors());
app.use(express.json());

// Configuração de rotas
app.use('/api/livros', livroRoutes);

module.exports = app;