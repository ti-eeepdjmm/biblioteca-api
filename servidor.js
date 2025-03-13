const app = require('./src/App');
const sequelize = require('./src/config/bancoDeDados');
const port = process.env.PORT || 3000;

// Testa a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('📚 Conexão com o banco de dados estabelecida...'); // Mensagem de sucesso na conexão
        // Cria o schema "biblioteca" se não existir
        return sequelize.query('CREATE SCHEMA IF NOT EXISTS biblioteca');
    })
    .then(() => {
        console.log('✅ Schema "biblioteca" criado ou já existente'); // Mensagem de sucesso na criação do schema
        // Configura o schema padrão para "biblioteca"
        return sequelize.query('SET search_path TO biblioteca');
    })
    .then(() => {
        console.log('✅ Schema configurado para "biblioteca"'); // Mensagem de sucesso na configuração do schema
        // Sincroniza os modelos com o banco de dados, alterando as tabelas conforme necessário
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log('🔄 Modelos sincronizados com o banco de dados'); // Mensagem de sucesso na sincronização dos modelos
        // Inicia o servidor
        app.listen(port, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('❌ Erro ao configurar o banco de dados:', err); // Mensagem de erro na configuração do banco de dados
    });