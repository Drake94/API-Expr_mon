//Diego Ortega
//23/05/2023
//diegoo@acl.cl

const express = require('express')
const { addMuestra, getMuestra, getMuestraByRut } = require('../controllers/muestraController')
const api = express.Router()
const { verifyToken, isTens } = require('../libs')

api.post('/muestra',verifyToken, isTens, addMuestra)

api.get('/muestra', getMuestra)

api.get('/muestra/:rut', getMuestraByRut)



module.exports = api