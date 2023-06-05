//Diego Ortega
//23/05/2023
//dortega@acl.cl
const mongoose = require('mongoose')
//Describe las estructura de la propiedades de un formato Json 
const Schema = mongoose.Schema

const resultSchema = Schema({
    result: {
        type: String,
        required: true
    },   
    sampleType: {
        type: String,
        required: true
    },
    validation: {
        type: String,
        required: true
    },
    rutPatient: {
        type: String,
        unique: true,
        required: true
    },
    status: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Results', resultSchema)