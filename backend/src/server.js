const express = require("express");

const routes = require("./routes");

require("./database");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

/*
Nome
Valor
Descrição
Data de vencimento
Hora de notificação
Data/hora atual 
*/
