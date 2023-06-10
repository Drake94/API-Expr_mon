//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const express = require('express')
const { addResultado, getResultado, getResultadoByRut, deleteResultado, updateResultadoById } = require('../controllers/resultadoController')
const api = express.Router()
const { verifyToken, isMedic } = require('../libs')

api.post('/resultado', verifyToken, isMedic, addResultado)

api.get('/resultado', getResultado)

api.get('/resultado/:rut', getResultadoByRut)

api.delete('/resultado/:_id', verifyToken, isMedic, deleteResultado)

api.put('/resultado/:_id', verifyToken, isMedic, updateResultadoById)


module.exports = api