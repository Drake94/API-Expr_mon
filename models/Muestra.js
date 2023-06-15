//Diego Ortega
//23/05/2023
//dortega@acl.cl
const mongoose = require('mongoose')
//Describe las estructura de la propiedades de un formato Json 
const Schema = mongoose.Schema


const sampleSchema = Schema({ 
    sampleType: {
        ref: "tipomuestras",
        type: Schema.Types.String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rutPatient: {
        ref: "pacientes",
        type: Schema.Types.String,
        required: true
    },
    status: {
        ref: "status",
        type: Schema.Types.String,
        required: true
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Samples', sampleSchema)