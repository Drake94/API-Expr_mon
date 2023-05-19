//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const mongoose = require('mongoose')
//Describe las estructura de la propiedades de un formato Json 
const Schema = mongoose.Schema

const PacienteSchema = Schema({
    nombrePaciente: String,
    rut: String,
    edad: Number

},{
    timestamps: true
})

module.exports = mongoose.model('Pacientes', PacienteSchema)