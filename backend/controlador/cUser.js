import mUser from "../modelo/mUser.js";

const cUser = {
    createUser: async (req, res)=>{
        try {
            let {nombre, correo, contrasenia} = req.body
            await mUser.postUser({nombre, correo, contrasenia})
            res.status(201).json({ mensaje: "Usuario registrado con éxito" });
        } catch (error) {
            if(error.code === 409){
                res.status(409).json({ error: error.message });
            } 
        }
    },
    getUser: async (req, res)=>{
        try {
            let results = await mUser.getUser()
            res.status(201).json(results);
        } catch (error) {
            
        }
    },
    signInUser: async (req, res)=>{
        try {
            let {correo, contrasenia} = req.body
            console.log(req.body);
            let result = await mUser.signInUser(correo)
            console.log(result);
            if(result.length === 0){
                return res.status(401).json({ mensaje: "El usuario no fue encontrado en la BD" });
            }
            if(result[0].password !== contrasenia){
                return res.status(403).json({ mensaje: "Contraseña incorrecta" });
            }
            return res.status(201).json({ mensaje: "Inicio de sesion éxitoso" });
        } catch (error) {
            // if(error.code === 409){
            //     res.status(409).json({ error: error.message });
            // } 
        }
    },
}

export default cUser
