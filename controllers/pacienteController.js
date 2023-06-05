//Diego Ortega
//17/05/2023
//diegoo@acl.cl

const Paciente = require('../models/Paciente')

async function addPaciente (req, res){
    try {
        const {
            nombrePaciente,
            edad,
            rut
        } = req.body

        const paciente = Paciente({
            nombrePaciente,
            edad,
            rut
        })

        const pacienteStored = await paciente.save()

        res.status(201).send({ pacienteStored})
    } catch (e) {
        res.status(500).send({ Message: e.Message })
    }

}

async function getPaciente (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const paciente = await Paciente.find().lean().exec()
    res.status(200).send({ paciente })
}

async function getPacienteByRut (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const pacientefound = await Paciente.find({rut: req.params.rut }).lean().exec()
    res.status(200).send({ pacientefound })

}

async function deletePaciente (req, res) {
    await Paciente.deleteOne({rut: req.params.rut}).lean()

    res.send("eliminando")
    

}

module.exports = {
    addPaciente,
    getPaciente,
    getPacienteByRut,
    deletePaciente
}