//Diego Ortega
//23/05/2023
//diegoo@acl.cl

const express = require('express')
const { addMuestra, getMuestra, getMuestraByRut } = require('../controllers/muestraController')
const api = express.Router()


api.post('/muestra', addMuestra)

api.get('/muestra', getMuestra)

api.get('/muestra/:rut', getMuestraByRut)



module.exports = api