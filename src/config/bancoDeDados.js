require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const { Sequelize } = require('sequelize');

// URI do banco de dados obtida das variáveis de ambiente
const databaseUri = process.env.DATABASE_URI;

// Cria uma instância do Sequelize com a URI do banco de dados e configurações adicionais
const sequelize = new Sequelize(databaseUri, {
    dialect: 'postgres', // Define o dialect como PostgreSQL
    logging: false, // Desativa logs de SQL no console
});

// Função assíncrona para testar a conexão, criar o schema se não existir, configurar o schema e sincronizar os modelos
const conectarBancoDeDados = async () => {
    try {
        // Testa a conexão com o banco de dados
        await sequelize.authenticate();
        console.log('📚 Conexão com o banco de dados estabelecida...'); // Mensagem de sucesso na conexão

        // Cria o schema "biblioteca" se não existir
        await sequelize.query('CREATE SCHEMA IF NOT EXISTS biblioteca');
        console.log('✅ Schema "biblioteca" criado ou já existente'); // Mensagem de sucesso na criação do schema

        // Configura o schema padrão para "biblioteca"
        await sequelize.query('SET search_path TO biblioteca');
        console.log('✅ Schema configurado para "biblioteca"'); // Mensagem de sucesso na configuração do schema

        // Sincroniza os modelos com o banco de dados, alterando as tabelas conforme necessário
        await sequelize.sync({ alter: true });
        console.log('🔄 Modelos sincronizados com o banco de dados'); // Mensagem de sucesso na sincronização dos modelos
    } catch (err) {
        console.error('❌ Erro ao configurar o banco de dados:', err); // Mensagem de erro na configuração do banco de dados
    }
};

// Chama a função para conectar ao banco de dados
conectarBancoDeDados();

// Exporta a instância do Sequelize para ser utilizada em outras partes do código
module.exports = sequelize;