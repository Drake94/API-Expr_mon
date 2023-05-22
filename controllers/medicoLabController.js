//Diego Ortega
//17/05/2023
//dortega@acl.cl

const MedicoLab = require('../models/MedicoLab')

async function addMedicoLab (req, res){
    try {
        const {
            nombre,
            cargo,
            correo,
            clave,
            rut
        } = req.body

        const medicoLab = MedicoLab({
            nombre,
            cargo,
            correo,
            clave,
            rut
        })

        if(req.file) {
            const { filename } = req.file
            medicoLab.setImgUrl(filename)
        }

        const medicoLabStored = await medicoLab.save()

        res.status(201).send({ medicoLabStored})
    } catch (e) {
        res.status(500).send({ Message: e.Message })
    }

}

async function getMedicoLab (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const medicolab = await MedicoLab.find().lean().exec()
    res.status(200).send({ medicolab })
}


module.exports = {
    addMedicoLab,
    getMedicoLab
}