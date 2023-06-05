//Diego Ortega
//17/05/2023
//dortega@acl.cl
const mongoose = require('mongoose')
const { appConfig } = require('../config') 
const bcrypt = require('bcryptjs')
//Describe las estructura de la propiedades de un formato Json 
const Schema = mongoose.Schema

const MedicoLabSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        unique: true,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
    rut: {
        type: String,
        unique: true,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true,
    },
    
})

MedicoLabSchema.methods.encrypPassword = async clave =>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(clave, salt)

}

MedicoLabSchema.methods.matchPassword = async function(clave) {
    return await bcrypt.compare(clave, this.clave)

}

MedicoLabSchema.methods.setImgUrl = function setImgUrl (filename) {
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('MedicoLabs', MedicoLabSchema)