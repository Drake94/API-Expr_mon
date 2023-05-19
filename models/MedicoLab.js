//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const mongoose = require('mongoose')
const { appConfig } = require('../config') 
const bcrypt = require('bcryptjs')
//Describe las estructura de la propiedades de un formato Json 
const Schema = mongoose.Schema

const MedicoLabSchema = Schema({
    nombre: String,
    cargo: String,
    correo: String,
    clave: String,
    rut: String,
    imgUrl: String

},{
    timestamps: true
})

MedicoLabSchema.methods.encryptPassword = clave =>{


}

MedicoLabSchema.methods.setImgUrl = function setImgUrl (filename) {
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('MedicoLabs', MedicoLabSchema)