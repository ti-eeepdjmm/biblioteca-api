'use strict';

// Importa módulos necessários
const fs = require('fs'); // Sistema de arquivos, usado para ler arquivos na pasta
const path = require('path'); // Utilitário para lidar com caminhos de arquivos
const Sequelize = require('sequelize'); // ORM Sequelize
const process = require('process'); // Acesso ao processo Node.js (útil para variáveis de ambiente)

// Nome do arquivo atual
const basename = path.basename(__filename);

// Define o ambiente de execução (development, production, test)
const env = process.env.NODE_ENV || 'development';

// Carrega as configurações do banco de dados do arquivo config.js
const config = require(__dirname + '/../config/config.js')[env];

// Objeto que armazenará os modelos carregados
const db = {};

let sequelize;

// Se a configuração usar uma variável de ambiente para a conexão (ex: DATABASE_URL)
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // Caso contrário, conecta usando os dados da config (usuário, senha, banco, etc.)
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Lê todos os arquivos da pasta atual (normalmente /models)
fs
  .readdirSync(__dirname) // Lê todos os arquivos do diretório atual
  .filter(file => {
    // Filtra apenas arquivos .js que não sejam este arquivo nem testes
    return (
      file.indexOf('.') !== 0 && // Ignora arquivos ocultos
      file !== basename && // Ignora este próprio arquivo
      file.slice(-3) === '.js' && // Apenas arquivos .js
      file.indexOf('.test.js') === -1 // Ignora arquivos de teste
    );
  })
  .forEach(file => {
    // Para cada arquivo, importa o modelo e o inicializa com sequelize
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model; // Salva o modelo no objeto db com seu nome
  });

// Se o modelo tiver associações (relacionamentos), chama o método associate
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db); // Passa todos os modelos para configurar os relacionamentos
  }
});

// Exporta a instância do Sequelize e os modelos carregados
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
