//Diego Ortega
//17/05/2023
//dortega@acl.cl

const express = require('express')
const upload = require('../libs/multer')
const { addMedicoLab, getMedicoLab, getMedicoLabByRut, deleteMedicoLab } = require('../controllers/medicoLabController')
const api = express.Router()


api.post('/medicoLab', upload.single('image'), addMedicoLab)

api.get('/medicoLab', getMedicoLab)

api.get('/medicoLab/:rut', getMedicoLabByRut)

//api.put('/medicoLab', upload.single('image'), addMedicoLab)

api.delete('/medicoLab/:rut', deleteMedicoLab)


module.exports = api