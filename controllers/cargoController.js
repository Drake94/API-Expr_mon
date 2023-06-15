//Diego Ortega
//09/06/2023
//diegoo@acl.cl

const Cargo = require('../models/Cargo')

async function addRole (req, res){
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
            const cargo = Cargo({
            name
            })
            
            const cargoStored = await cargo.save()
            res.status(201).send({ cargoStored})
        }        
        
    } catch (e) {
        res.status(500).send({ Message: e.Message })
    }

}

async function getRole (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const rolefound = await Cargo.find().lean().exec()
    res.status(200).send({ rolefound })
}


module.exports = {
    addRole,
    getRole
}