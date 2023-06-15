//Diego Ortega
//09/06/2023
//diegoo@acl.cl

const StatusSample = require('../models/StatusSample')

async function addStatus (req, res){
    try {
        const {
            names

        } = req.body

        const name = names[0].toUpperCase() + names.slice(1);
        console.log(name)
        if(name.length <= 3){
            return res.status(400).send('Nombre no puede tener menos de 3 letras')

        }else if (name.length >= 15){
            return res.status(400).send('Nombre no puede tener más de 15 letras')
        }else{
            const statussample = StatusSample({
            name
            })
            
            
            const statusStored = await statussample.save()
            res.status(201).send({ statusStored})
        }        
        
    } catch (e) {
        res.status(500).send({ Message: e.Message })
    }

}

async function getStatus (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const statusfound = await StatusSample.find().lean().exec()
    res.status(200).send({ statusfound })
}


module.exports = {
    addStatus,
    getStatus
}