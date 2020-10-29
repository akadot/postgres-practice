const { Router } = require("express");

const DebtsController = require("./controllers/DebtsController");

const routes = Router();

routes.post("/debts", DebtsController.store);

module.exports = routes;
