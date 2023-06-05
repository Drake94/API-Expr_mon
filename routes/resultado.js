//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const express = require('express')
const { addResultado, getResultado, getResultadoByRut, deleteResultado } = require('../controllers/resultadoController')
const api = express.Router()


api.post('/resultado', addResultado)

api.get('/resultado', getResultado)

api.get('/resultado/:rut', getResultadoByRut)

api.delete('/resultado/:rut', deleteResultado)


module.exports = api