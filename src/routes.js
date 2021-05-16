const express = require('express');

const AnunciosController = require('./controllers/AnunciosController');
const ClientesController = require('./controllers/ClientesController');

const routes = express.Router();

routes.get('/anuncios', AnunciosController.index);
routes.post('/anuncios', AnunciosController.create);

routes.get('/clientes', ClientesController.index);

module.exports = routes;