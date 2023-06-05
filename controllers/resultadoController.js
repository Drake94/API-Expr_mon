//Diego Ortega
//23/05/2023
//dortega@acl.cl

const Resultado = require('../models/Resultado')

async function addResultado (req, res){
    try {
        const {
        result,
        sampleType,
        validation,
        rutPatient,
        status,
        } = req.body;
    
        const resultado = Resultado({
        result,
        sampleType,
        validation,
        rutPatient,
        status,
        })
        const resultadoStored = await resultado.save()

        res.status(201).send({ resultadoStored})
    } catch (e) {
        res.status(500).send({ Message: e.Message })
    }

}

async function getResultado (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const resultado = await Resultado.find().lean().exec()
    res.status(200).send({ resultado })
}

async function getResultadoByRut (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const resultadofound = await Resultado.find({rut: req.params.rut }).lean().exec()
    res.status(200).send({ resultadofound })

}

async function deleteResultado (req, res) {
    
    await Resultado.deleteOne({rut: req.params.rut}).lean()
    
    res.send("eliminando")
    

}


module.exports = {
    addResultado,
    getResultado,
    getResultadoByRut,
    deleteResultado
}