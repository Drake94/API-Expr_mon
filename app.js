//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const express = require('express')
const bodyParser = require('body-parser')
const pacienteRoutes = require('./routes/paciente')
const cors = require('cors')
const medicoLabRoutes = require('./routes/medicoLab')
const resultadoRoutes = require('./routes/resultado')
const muestraRoutes = require('./routes/muestra')
const tipoMuestraRoutes = require('./routes/tipoMuestra')
const cargoRoutes = require('./routes/cargo')
const statusRoutes = require('./routes/statusSample')
const session = require('express-session')
const passport = require('passport')

const app = express();
require('./libs/passport')
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/admin', pacienteRoutes)
app.use('/admin', medicoLabRoutes)
app.use('/admin', resultadoRoutes)
app.use('/admin', muestraRoutes)
app.use('/admin', tipoMuestraRoutes)
app.use('/admin', cargoRoutes)
app.use('/admin', statusRoutes)

module.exports = app