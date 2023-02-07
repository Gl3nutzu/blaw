const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    logging: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});
sequelize
    .authenticate()
    .then(() => {
        console.log("connected..");
    })
    .catch((err) => {
        console.log("Error" + err);
    });
const db = {};

db.sequelize = sequelize;

db.course = require("./courseModel.js")(sequelize, DataTypes);
db.categorie = require("./categorieModel.js")(sequelize, DataTypes);

db.categorie.hasMany(db.course);
db.course.belongsTo(db.categorie);

db.sequelize.sync({ alter: true }).then(() => {
    console.log("yes re-sync done!");
});

module.exports = db;