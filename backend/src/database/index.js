const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Debts = require("../models/Debits");

const connection = new Sequelize(dbConfig);

Debts.init(connection);

module.exports = connection;
