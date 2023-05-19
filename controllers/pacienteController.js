//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const Paciente = require('../models/Paciente')

async function addPaciente (req, res){
    try {
        const {
            nombrePaciente,
            rut,
            edad 
        } = req.body

        const paciente = Paciente({
            nombrePaciente,
            rut,
            edad 
        })

        const pacienteStored = await paciente.save()

        res.status(201).send({ pacienteStored})
    } catch (e) {
        res.status(500).send({ Message: e.Message })
    }

}

module.exports = {
    addPaciente
}