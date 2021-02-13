const { Sequelize } = require('sequelize');
const {Config} = require('../config/');

console.log('config:');
console.log(Config);
const sequelize = new Sequelize({
    dialect: 'mysql',
    database: Config.db.database,
    username: Config.db.username,
    password: Config.db.password,
    port: Config.db.port,
    host: Config.db.host
});

const modelDefiners = [
    require('./../models/note.model')
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

module.exports = sequelize;