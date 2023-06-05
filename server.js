//Diego Ortega
//17/05/2023
//diegoo@acl.cl

require('dotenv').config();
const app = require('./app')
const connectDb = require('./db/mongoDB');
const { appConfig, dbConfig } = require('./config');


async function iniApp(appConfig,  dbConfig){
    try {
        await connectDb(dbConfig);
        app.listen(appConfig.port, () => console.log(`Servidor funcionando en ${appConfig.host}${appConfig.port}`));
    } catch (e) {
        console.error(e)
        process.exit(0) 
    }

}

iniApp(appConfig, dbConfig )