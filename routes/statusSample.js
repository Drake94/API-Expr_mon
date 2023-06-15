//Diego Ortega
//09/06/2023
//diegoo@acl.cl

const express = require('express')
const { addStatus, getStatus } = require('../controllers/statusSampleController')
const api = express.Router()


api.post('/status', addStatus)

api.get('/status', getStatus)





module.exports = api