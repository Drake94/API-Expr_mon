//Diego Ortega
//18/05/2023
//dortega@acl.cl

const multer = require('multer');
//modulo path para manejar las rutas
const path = require('path');

//multer config
module.exports = multer({
    //donde guardaremos el archivo, se deja vacio por que se subira a cloudinary
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        //nombre original del archivo
        let ext = path.extname(file.originalname);
        if(ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png"){
            cb(
                new error(
                    "El formato de archivo para la imagen no es soportado, suba un archivo .jpg, .jpeg, .png"
                ),
                false
            );
            return;
        }
        cb(null, true);
    },
});
