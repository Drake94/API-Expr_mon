//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const express = require('express')
const { addPaciente } = require('../controllers/pacienteController')
const api = express.Router()


api.post('/paciente', addPaciente)

module.exports = api