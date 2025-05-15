import db from "../config/db.js"

const mUser = {
    postUser: async (usuario)=>{
        try {
            // si el correo ya existe entonces manda un resultado
            let [confirmarCorreo] = await db.execute("SELECT id FROM users WHERE email = ?",[usuario.correo])
            console.log(confirmarCorreo);

            if(confirmarCorreo.length > 0){
                const error = new Error("El correo ya está registrado"); 
                error.code = 409;
                throw error;
            }
            
            const add = "insert into users (name, email, password) values (?,?,?)"
            await db.execute(add, [usuario.nombre, usuario.correo, usuario.contrasenia])

        } catch (error) {
            throw error;
        }
    },
    getUser: async ()=>{
        try {
            const add = "select * from users;"
            let [results] = await db.query(add)
            return results
            
        } catch (error) {
            
        }
    },
    signInUser: async (correo)=>{
        try {          
            const add = "SELECT * FROM users WHERE email = ?"
            let [results] = await db.execute(add, [correo])
            return results

        } catch (error) {
            // throw error;
        }
    }
}

export default mUser