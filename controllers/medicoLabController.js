//Diego Ortega
//17/05/2023
//dortega@acl.cl

const MedicoLab = require('../models/MedicoLab')
const cloudinary = require('../libs/cloudinary')
const jwt = require( 'jsonwebtoken');
const {userLogin} = require('../config');


async function addMedicoLab (req, res){
    try {
        const {
        nombre,
        cargo,
        correo,
        clave,
        confirmarClave,
        rut,
        imgUrl,
        publicId
        } = req.body;

        if(confirmarClave != clave){
            return res.status(400).send('Las claves no son iguales')
        }

        if(!req.file){
            return res.status(204).send('Por favor seleccione una imagen')
        }

        if(clave.length <= 4){
            return res.status(400).send('Clave demasiado corta, mínimo 4 caracteres') 
        }else if(clave.length >= 21){
            return res.status(400).send('Clave demasiado larga, Maximo 20 caracteres') 
        }

        const cloudinary_image = await cloudinary.uploader.upload(req.file.path,{folder: 'imagesSarm'})
        const {secure_url, public_id} = cloudinary_image;
    
        MedicoLab.findOne({ rut }).then((mediclab) => { 
            if (mediclab){
                return res.status(400).send('Rut en uso')
            }else{
                MedicoLab.findOne({ correo }).then(async (mediclab) => { 
                    if (mediclab){
                        return res.status(400).send('Correo en uso')
                    }else if(!nombre){
                        return res.status(400).send('Falta el campo "Nombre"') 
                    }else if(!cargo ){
                        return res.status(400).send('Falta el campo "Cargo"') 
                    }else if(!correo ){
                        return res.status(400).send('Falta el campo "Correo"') 
                    }else if(!clave){
                        return res.status(400).send('Falta el campo "Clave') 
                    }else if(!rut){
                        return res.status(400).send('Falta el campo "Rut"') 
                    }else{
                        const medicoLab = MedicoLab({
                            nombre,
                            cargo,
                            correo,
                            clave,
                            rut,
                            imgUrl: secure_url,
                            publicId: public_id
                        })
                        medicoLab.clave = await medicoLab.encryptPassword(clave)
                        const medicoLabStored = await medicoLab.save()
                    
                        const token = jwt.sign({_id: medicoLabStored._id}, userLogin.secret, {
                            expiresIn:31536000
                        })

                        res.status(201).send({ medicoLabStored,token})
                    }})    
            }
        })
        
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

async function updateMedicoLabById (req, res) {
    const updateResultado = await MedicoLab.findByIdAndUpdate( req.params._id, req.body,{
        new: true
    })
    res.status(200).send({updateResultado})
}

async function deleteMedicoLab (req, res) {
    
    await MedicoLab.deleteOne({rut: req.params.rut}).lean()
    
    res.status(202).send("Eliminando")
    

}

async function medicoLogin (req, res) {
    //comprueba si existe el correo en el sistema 
    const userFound = await MedicoLab.findOne({correo: req.body.correo})
    if(!userFound)
        return res.status(400).send('Usuario o clave incorrecto')
    //comprueba si la clave sea correcta, ademas de desencriptarla
    const matchPasswords = await MedicoLab.matchPassword(req.body.clave, userFound.clave)
    if(!matchPasswords)
        return res.status(401).send('Clave o usuario incorrecto')
    
    const token = jwt.sign({_id: userFound._id}, userLogin.secret,{expiresIn: 86400})
    res.status(200).send({token,userFound})

}


module.exports = {
    addMedicoLab,
    getMedicoLab,
    getMedicoLabByRut,
    deleteMedicoLab,
    medicoLogin,
    updateMedicoLabById
}