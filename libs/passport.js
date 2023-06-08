const passport = require('passport')
const localStrategy = require('passport-local')
const MedicoLab = require('../models/MedicoLab')


passport.use(new localStrategy({
    usernameField: 'correo',
    passwordField: 'clave'
}, async (correo, clave, done ) => {
    //Confirmar correo de usuario
    const user = await MedicoLab.findOne({correo})
    if(!user){
        return done(null, false, {message: 'No encontramos el usuario'})
    } else {
        //Confirmar clave de usuario
        const match = await user.matchPassword(clave)
        if (match) {
            return done(null,user)
        } else {
            return done(null, false, {message:'Clave incorrecta'})
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    MedicoLab.findById(id, (err, user) =>{
        done(err, user); 
    })
});