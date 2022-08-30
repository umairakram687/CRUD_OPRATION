const dbConfig = require("../config/dbconfig.js");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.max,
    min: dbConfig.min,
    acquire: dbConfig.acquire,
    idle: dbConfig.idle,
  },
});

sequelize
  .authenticate()

  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel.js")(sequelize, DataTypes);
db.reviws = require("./reviewModel.js")(sequelize, DataTypes);

db.sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("Yes re-sync is Done!");
  });

module.exports = db;
