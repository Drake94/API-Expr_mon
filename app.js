//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const express = require('express')
const bodyParser = require('body-parser')
const pacienteRoutes = require('./routes/paciente')
const cors = require('cors')
const medicoLabRoutes = require('./routes/medicoLab');
const resultadoRoutes = require('./routes/resultado');
const muestraRoutes = require('./routes/muestra');
const tipoMuestraRoutes = require('./routes/tipoMuestra');
const cargoRoutes = require('./routes/cargo');
const statusRoutes = require('./routes/statusSample');
const session = require('express-session');
const path = require('path')


//swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CrudExMon API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8081"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

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

app.use("/admin-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/admin', pacienteRoutes)
app.use('/admin', medicoLabRoutes)
app.use('/admin', resultadoRoutes)
app.use('/admin', muestraRoutes)
app.use('/admin', tipoMuestraRoutes)
app.use('/admin', cargoRoutes)
app.use('/admin', statusRoutes)

module.exports = app