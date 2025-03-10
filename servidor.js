const app = require('./src/App');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});