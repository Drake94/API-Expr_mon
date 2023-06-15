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

    const resultado = await Resultado.find().lean().exec()
    res.status(200).send({ resultado })
}

async function getResultadoByRut (req, res) {

    const resultadofound = await Resultado.find({rut: req.params.rut }).lean().exec()
    res.status(200).send({ resultadofound })

}


async function updateResultadoById (req, res) {
    const updateResultado = await Resultado.findByIdAndUpdate( req.params._id, req.body,{
        new: true
    })
    res.status(204).send({updateResultado})
}

async function deleteResultado (req, res) {
    
    await Resultado.deleteOne({_id: req.params._id}).lean()
    
    res.send("eliminando")
    

}


module.exports = {
    addResultado,
    getResultado,
    getResultadoByRut,
    deleteResultado,
    updateResultadoById
}