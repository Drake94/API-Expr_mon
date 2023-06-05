//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const Muestra = require('../models/Muestra')

async function addMuestra (req, res){
    try {
        const {
            sampleType,
            description,
            rutPatient,
            status
        } = req.body

        const muestra = Muestra({
            sampleType,
            description,
            rutPatient,
            status
        })

        const muestraStored = await muestra.save()

        res.status(201).send({ muestraStored})
    } catch (e) {
        res.status(500).send({ Message: e.Message })
    }

}

async function getMuestra (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const muestra = await Muestra.find().lean().exec()
    res.status(200).send({ muestra })
}

async function getMuestraByRut (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const Muestrafound = await Muestra.find({rut: req.params.rut }).lean().exec()
    res.status(200).send({ Muestrafound })

}


module.exports = {
    addMuestra,
    getMuestra,
    getMuestraByRut
}