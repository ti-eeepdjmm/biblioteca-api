const app = require('./src/App');
const port = process.env.PORT || 3000;
const sequelize = require('./src/config/bancoDeDados');

// Testa a conexão com o banco de dados e sincroniza os modelos
sequelize.authenticate()
    .then(() => {
        console.log('📚 Conexão com o banco de dados estabelecida...');
        return sequelize.sync({ alter: true }); // Sincroniza os modelos com o banco de dados, alterando as tabelas conforme necessário
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('❌ Não foi possível conectar ao banco de dados:', err);
    });