require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const { Sequelize } = require('sequelize');

// URI do banco de dados obtida das variáveis de ambiente
const databaseUri = process.env.DATABASE_URI;

// Cria uma instância do Sequelize com a URI do banco de dados e configurações adicionais
const sequelize = new Sequelize(databaseUri, {
    dialect: 'postgres', // Define o dialect como PostgreSQL
    logging: false, // Desativa logs de SQL no console
});

// Testa a conexão com o banco de dados, configura o schema e sincroniza os modelos
sequelize.authenticate()
    .then(() => {
        console.log('📚 Conexão com o banco de dados estabelecida...'); // Mensagem de sucesso na conexão
        return sequelize.query('SET search_path TO biblioteca'); // Configura o schema padrão para "biblioteca"
    })
    .then(() => {
        console.log('✅ Schema configurado para "biblioteca"'); // Mensagem de sucesso na configuração do schema
        return sequelize.sync({ force: true }); // Sincroniza os modelos com o banco de dados, alterando as tabelas conforme necessário
    })
    .then(() => {
        console.log('🔄 Modelos sincronizados com o banco de dados'); // Mensagem de sucesso na sincronização dos modelos
    })
    .catch(err => {
        console.error('❌ Erro ao configurar o banco de dados:', err); // Mensagem de erro na configuração do banco de dados
    });

// Exporta a instância do Sequelize para ser utilizada em outras partes do código
module.exports = sequelize;