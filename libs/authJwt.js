const  jwt = require( "jsonwebtoken")
const {userLogin} = require('../config');
const MedicoLab = require("../models/MedicoLab");


const verifyToken= async(req,res, next) => {
    try {
    const token = req.headers["x-access-token"]

    if(!token)
        return res.status(403).send("No se entrego un token ")

    const decoded =jwt.verify(token,userLogin.secret) 
    req.medicoLabId = decoded._id

    const user = await MedicoLab.findById(req.medicoLabId, {clave: 0})
    if (!user)
        return res.status(404).send("Usuario no encontrado")

    next()

    } catch (error) {
        return res.status(401).send("No Autorizado")
    }
}

const isMedic = async (req, res, next)=>{
    const user = await MedicoLab.findById(req.medicoLabId)
    const cargo = user.cargo
    if (cargo === "Médico" || cargo === "Tecnólogo"|| cargo === "TECNÓLOGO" || cargo === "MÉDICO"){
        next();
        return;
    }
    return res.status(403).send("Se requiere cargo Médico o Tecnólogo");
}

const isTens = async (req, res, next)=>{
    const user = await MedicoLab.findById(req.medicoLabId)
    const cargo = user.cargo
    if (cargo === "Tens" || cargo === "Tecnólogo" || cargo === "TENS" || cargo === "TECNÓLOGO"){
        next();
        return;
    }
    return res.status(403).send("Se requiere cargo Tens o Tecnólogo");
}
const isAdmin = async (req, res, next)=>{
    const user = await MedicoLab.findById(req.medicoLabId)
    const cargo = user.cargo
    console.log(cargo)
    if (cargo === "Administrador" || cargo === "ADMINISTRADOR"){
        next();
        return;
    }
    return res.status(403).send("Acceso denegado, Solo Administradores");
}

module.exports= {verifyToken, isMedic, isTens, isAdmin}