export default function toast(mensaje, contenedor){
    const toastContenedor = document.createElement("div")
    toastContenedor.classList.add("toast")

    if(mensaje === "Usuario registrado con éxito"){
        toastContenedor.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#26de6e"/>
            <path d="M7 12l3 3 7-7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <h3 class="toast__info">${mensaje}</h3>`
    }
     if(mensaje === "Inicio de sesion éxitoso"){
        toastContenedor.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#26de6e"/>
            <path d="M7 12l3 3 7-7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <h3 class="toast__info">${mensaje}</h3>`
    }

    if(mensaje === "El correo ya está registrado"){
        toastContenedor.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#f44336"/>
            <path d="M15 9l-6 6M9 9l6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


        <h3 class="toast__info">${mensaje}</h3>`
    }
    if(mensaje === "Contraseña incorrecta"){
        toastContenedor.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#f44336"/>
            <path d="M15 9l-6 6M9 9l6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


        <h3 class="toast__info">${mensaje}</h3>`
    }
    if(mensaje === "El usuario no fue encontrado en la BD"){
        toastContenedor.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#f44336"/>
            <path d="M15 9l-6 6M9 9l6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


        <h3 class="toast__info">${mensaje}</h3>`
    }

   
    contenedor.appendChild(toastContenedor)
    setTimeout(()=>{
        toastContenedor.remove()
    },3000)
}