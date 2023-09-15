const routerCom = require('express').Router();
const {ventasProve} = require('../controllers/compras');

routerCom.get('/proveedor',ventasProve);

module.exports = routerCom