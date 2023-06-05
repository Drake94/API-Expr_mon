//Diego Ortega
//23/05/2023
//dortega@acl.cl
const mongoose = require('mongoose')
//Describe las estructura de la propiedades de un formato Json 
const Schema = mongoose.Schema

const sampleTypeSchema = Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('tipomuestras', sampleTypeSchema)