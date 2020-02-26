const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes')
const app = express();
const {setupWebsocket} = require ('./websocket');

const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://admin:admin@cluster0-gq0rh.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP get, post, put, delete

// TIPOS DE PARAMETROS

// Query params: req.query (Filtros, ordenação, paginação, ...)
// Route params: request.params(Identificar um recurso na alteração remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// Mongo DB (Não - relacional)

server.listen(3333);

