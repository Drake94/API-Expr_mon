//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const express = require('express')
const bodyParser = require('body-parser')
const pacienteRoutes = require('./routes/paciente')
const medicoLabRoutes = require('./routes/medicoLab')


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/admin', pacienteRoutes)
app.use('/admin', medicoLabRoutes)

module.exports = app