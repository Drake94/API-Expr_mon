//Diego Ortega
//23/05/2023
//diegoo@acl.cl

const express = require('express')
const { addTipoMuestra, getTipoMuestra, getTipoMuestraByRut, deleteTipoMuestra } = require('../controllers/tipoMuestraController')
const api = express.Router()


api.post('/tipomuestra', addTipoMuestra)

api.get('/tipomuestra', getTipoMuestra)

//api.get('/tipomuestra/:id', gettipomuestraById)



module.exports = api