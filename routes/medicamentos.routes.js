const routerMedi = require('express').Router();
const {obtenerDatos,obternerProveedores,MedicamentosCompProvA,caducidaMed} = require('../controllers/medicamentos')

routerMedi.get('/stock-50',obtenerDatos)
routerMedi.get('/proveedores-medic',obternerProveedores)
routerMedi.get('/proveedorA',MedicamentosCompProvA)
routerMedi.get('/caducidad',caducidaMed)

module.exports = routerMedi;