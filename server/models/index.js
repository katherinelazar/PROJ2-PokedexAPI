import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config/sequelize';

const db = {};
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, config.db.options);

fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(file => {
  const model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});


for (const modelName of Object.keys(db)) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
