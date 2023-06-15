//Diego Ortega
//17/05/2023
//dortega@acl.cl

const express = require('express')
const upload = require('../libs/multer')
const medicAs  = require('../controllers/medicoLabController')
const api = express.Router()


api.post('/medicoLab', upload.single('image'), medicAs.addMedicoLab)

api.get('/medicoLab', medicAs.getMedicoLab)

api.get('/medicoLab/:rut', medicAs.getMedicoLabByRut)

api.post('/medicoLabLogIn', medicAs.medicoLogin)

//api.put('/medicoLab', upload.single('image'), addMedicoLab)

api.delete('/medicoLab/:rut', medicAs.deleteMedicoLab)


module.exports = api