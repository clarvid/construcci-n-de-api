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
            console.log("funciona al inicio");

            let correo = form.correoS.value
            let contrasenia = form.contraseniaS.value
            console.log("funciona al cuando se crean variables");

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
            // console.log(data);
            toast(data.mensaje, contenedor)
            form.reset()

        } catch (error) {
            let mensaje = error.mensaje || "Ha ocurrido un error"
            console.log(`Error ${error.estado}: ${mensaje}`);
            toast(mensaje, contenedor)
        }
    },
    getAll: async (contenedor, fragment, template)=>{
        try {
            let res = await fetch("http://localhost:3000/usuarios", {
                method: "GET"
            })

            if(!res.ok) throw {estado: res.status, mensaje: res.statusText}
            let data = await res.json()

            contenedor.innerHTML = "";
            data.forEach((usuario, index) => {
                let clone = template.content.cloneNode(true)
                clone.querySelector(".item").textContent = `${index+1}`
                clone.querySelector(".nombre").textContent = usuario.name
                clone.querySelector(".correo").textContent = usuario.email
                fragment.appendChild(clone);
            });
            console.log(data);
            contenedor.appendChild(fragment);

        } catch (error) {
            let mensaje = error.mensaje || "Ha ocurrido un error"
            let mensajeFinal = `Error ${error.estado}: ${mensaje}`
            contenedor.appendChild = mensajeFinal
            console.log(`Error ${error.estado}: ${mensaje}`);
        }
    },
}

export default ajaxUser