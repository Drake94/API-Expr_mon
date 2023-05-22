//Diego Ortega
//18/05/2023
//dortega@acl.cl

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './storage/imgs')
    },
    filename: function(req, file, cb){
        cb(null, `${file.fieldname}-${Date.now()}.png`)
    }
})
const upload = multer({ storage })

module.exports = upload