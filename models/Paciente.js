//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const mongoose = require('mongoose')
//Describe las estructura de la propiedades de un formato Json 
const Schema = mongoose.Schema

const PacienteSchema = Schema({

    nombrePaciente: {
        type: String,
        required: true
    },
    edad: {
        type: Number
    },
    rut: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('Pacientes', PacienteSchema)