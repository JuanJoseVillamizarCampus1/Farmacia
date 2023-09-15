const routesVent = require('express').Router()
const {recetas,paracetamol} = require('../controllers/ventas')

routesVent.get('/recetas',recetas)
routesVent.get('/paracetamol',paracetamol)

module.exports = routesVent;