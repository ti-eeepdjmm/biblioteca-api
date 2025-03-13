require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const app = require('./src/App');
const port = process.env.PORT || 3000;

// Inicia o servidor
app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});