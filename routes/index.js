const express = require('express');

const clientsRouter = require('./clients.router')

function  routerApi(app){
  const router = express.Router();
  app.use('/api', router);
  router.use('/clients', clientsRouter);
}

module.exports = routerApi
