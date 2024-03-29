const { Router } = require("express");

const DebtsController = require("./controllers/DebtsController");

const routes = Router();

routes.get("/debts", DebtsController.index);
routes.post("/debts", DebtsController.store);
routes.put("/debts/:id", DebtsController.edit);
routes.delete("/debts/:id", DebtsController.delete);

module.exports = routes;
