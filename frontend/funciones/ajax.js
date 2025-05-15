import toast from "./toast.js"

const ajaxUser = {
    createUser:async (form, contenedor)=>{
        try {
            let nombre = form.nombreR.value
            let correo = form.correoR.value
            let contrasenia = form.contraseniaR.value

            let res = await fetch("http://localhost:3000/registro", {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    nombre,
                    correo,
                    contrasenia
                })
            })

            if(!res.ok) {
                let errorData = await res.json()
                throw {
                    estado: res.status,
                    mensaje: errorData.error || res.statusText
                }
            }
            let data = await res.json()
            console.log(data);
            toast(data.mensaje, contenedor)
            form.reset()
        } catch (error) {
            console.log(error);
            let mensaje = error.mensaje || "Ha ocurrido un error"
            console.log(`Error ${error.estado}: ${mensaje}`);
            toast(mensaje, contenedor)
        }
    },
    signInUser:async (form, contenedor)=>{
        try {
            let correo = form.correoS.value
            let contrasenia = form.contraseniaS.value

            let res = await fetch("http://localhost:3000/ingreso", {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    correo,
                    contrasenia
                })
            })

            if(!res.ok) {
                let errorData = await res.json()
                throw {
                    estado: res.status,
                    mensaje: errorData.mensaje || res.statusText
                }
            }
            let data = await res.json()
            console.log(data);
            toast(data.mensaje, contenedor)
            form.reset()

        } catch (error) {
            let mensaje = error.mensaje || "Ha ocurrido un error"
            console.log(`Error ${error.estado}: ${mensaje}`);
            toast(mensaje, contenedor)
        }
    }
}

export default ajaxUser