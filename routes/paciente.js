//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const express = require('express')
const { addPaciente, getPaciente, getPacienteByRut,deletePaciente } = require('../controllers/pacienteController')
const api = express.Router()


api.post('/paciente', addPaciente)

api.get('/paciente', getPaciente)

api.get('/paciente/:rut', getPacienteByRut)

api.delete('/paciente/:rut', deletePaciente)


module.exports = api