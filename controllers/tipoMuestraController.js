//Diego Ortega
//23/05/2023
//diegoo@acl.cl

const TipoMuestra = require('../models/TipoMuestra')

async function addTipoMuestra (req, res){
    try {
        const {
            name

        } = req.body

        const tipoMuestra = TipoMuestra({
            name
        })

        const tipoMuestraStored = await tipoMuestra.save()

        res.status(201).send({ tipoMuestraStored})
    } catch (e) {
        res.status(500).send({ Message: e.Message })
    }

}

async function getTipoMuestra (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const tipoMuestra = await TipoMuestra.find().lean().exec()
    res.status(200).send({ tipoMuestra })
}


module.exports = {
    addTipoMuestra,
    getTipoMuestra
}