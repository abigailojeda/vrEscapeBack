const dbConfig = require("../config/db-config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ranking = require("./ranking.model.js")(sequelize, Sequelize);
db.game = require("./game.model.js")(sequelize, Sequelize);
//db.user = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;
