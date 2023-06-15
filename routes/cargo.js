//Diego Ortega
//09/06/2023
//diegoo@acl.cl

const express = require('express')
const { addRole, getRole } = require('../controllers/cargoController')
const api = express.Router()


api.post('/role', addRole)

api.get('/role', getRole)





module.exports = api