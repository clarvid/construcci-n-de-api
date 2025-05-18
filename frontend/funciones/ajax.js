import toast from "./toast.js"

// Se crea un objeto para que sus metodos sean usados para la conexion con el backend
const ajaxUser = {
    createUser:async (form, contenedor)=>{
        try {
            // Se registraran los datos que enviamos a traves del formulario
            let nombre = form.nombreR.value
            let correo = form.correoR.value
            let contrasenia = form.contraseniaR.value

            // Peticion al backend para registrar al usuario
            let res = await fetch("http://localhost:3000/registro", {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    nombre,
                    correo,
                    contrasenia
                })
            })

            // En caso de que la peticion falle, se captura el error
            if(!res.ok) {
                let errorData = await res.json()
                throw {
                    estado: res.status,
                    mensaje: errorData.error || res.statusText
                }
            }
            // Se rescatan los datos para el posterior uso en el toast
            let data = await res.json()

            // Dependiendo de la respuesta de activa el toas
            toast(data.mensaje, contenedor)

            // Se resetea el formulario en caso de que el proceso sea exitoso
            form.reset()
        } catch (error) {
            let mensaje = error.mensaje || "Ha ocurrido un error"
            console.log(`Error ${error.estado}: ${mensaje}`);

            // Dependiendo del error se activa el toast
            toast(mensaje, contenedor)
        }
    },
    signInUser:async (form, contenedor)=>{
        try {
            // Se capturan los datos del formulario
            let correo = form.correoS.value
            let contrasenia = form.contraseniaS.value
            
            // Peticion para el ingreso del usuario
            let res = await fetch("http://localhost:3000/ingreso", {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    correo,
                    contrasenia
                })
            })

            // Manejo de errores
            if(!res.ok) {
                let errorData = await res.json()
                throw {
                    estado: res.status,
                    mensaje: errorData.mensaje || res.statusText
                }
            }
            let data = await res.json()
            // Envio de datos al toast
            toast(data.mensaje, contenedor)

            // Se resetea el formulario en caso de que el proceso sea exitoso
            form.reset()

        } catch (error) {
            let mensaje = error.mensaje || "Ha ocurrido un error"
            // console.log(`Error ${error.estado}: ${mensaje}`);
            toast(mensaje, contenedor)
        }
    },
    getAll: async (contenedor, fragment, template)=>{
        try {
            // Peticion al backend para que traiga a todos los usuarios registrados
            let res = await fetch("http://localhost:3000/usuarios", {
                method: "GET"
            })

            // Manejo de errores
            if(!res.ok) throw {estado: res.status, mensaje: res.statusText}
            let data = await res.json()

            // Manejo de los usuarios para que se visualice en el modal
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