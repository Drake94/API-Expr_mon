//Diego Ortega
//17/05/2023
//dortega@acl.cl

const express = require('express')
const upload = require('../libs/storage')
const { addMedicoLab, getMedicoLab } = require('../controllers/medicoLabController')
const api = express.Router()


api.post('/medicoLab', upload.single('image'), addMedicoLab)
api.get('/medicoLab', getMedicoLab)

module.exports = api    