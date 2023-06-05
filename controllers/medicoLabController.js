//Diego Ortega
//17/05/2023
//dortega@acl.cl

const MedicoLab = require('../models/MedicoLab')
const cloudinary = require('../libs/cloudinary')

async function addMedicoLab (req, res){
    try {
        const {
        nombre,
        cargo,
        correo,
        clave,
        rut,
        imgUrl,
        publicId
    } = req.body;
    if(!req.file){
        return res.send('Por favor seleccione una imagen')
    }
        
        const cloudinary_image = await cloudinary.uploader.upload(req.file.path,{
            folder: 'imagesSarm'
        })
        const {secure_url, public_id} = cloudinary_image;

        const medicoLab = MedicoLab({
        nombre,
        cargo,
        correo,
        clave,
        rut,
        imgUrl: secure_url,
        publicId: public_id
        })
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

async function getMedicoLabByRut (req, res) {
    /*find()= consulta. lean()=convertir a objetos planos de JS. 
    exec() ejecuta la consulta para dar cumplimiento a la promesa*/
    const medicolabfound = await MedicoLab.find({rut: req.params.rut }).lean().exec()
    res.status(200).send({ medicolabfound })

}

async function deleteMedicoLab (req, res) {
    
    await MedicoLab.deleteOne({rut: req.params.rut}).lean()
    
    res.send("eliminando")
    

}


module.exports = {
    addMedicoLab,
    getMedicoLab,
    getMedicoLabByRut,
    deleteMedicoLab
}