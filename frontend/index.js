import ajaxUser from "./funciones/ajax.js"

const d = document
const $formRegister = d.querySelector(".form__registro")
const $formIngreso = d.querySelector(".form__inicioSesion")
const contenedor = d.querySelector(".contenedor__main")
const contenedorBody = d.querySelector("body")

const btnInicioSesion = d.querySelector(".saludo_inicioSesion")
const btnRegistro = d.querySelector(".saludo_registro")

// ventana modal
const btnClose = d.querySelector(".btnClose")
const btnOpen = d.querySelector(".listadoUsuarios")
const modal = d.querySelector(".modal")

const contenedorUsuarios = d.querySelector(".modal_usuarios")
const fragment = d.createDocumentFragment()
const template = d.getElementById("template");



d.addEventListener("DOMContentLoaded", async(e)=>{

    $formRegister.addEventListener("submit",async(e)=>{
        e.preventDefault()
        console.log("Funciona el registro");
        await ajaxUser.createUser($formRegister, contenedorBody)
        await ajaxUser.getAll(contenedorUsuarios, fragment, template)

    })
    $formIngreso.addEventListener("submit",async(e)=>{
        e.preventDefault()
        // console.log("Funciona el inicio de sesion antes");

        await ajaxUser.signInUser($formIngreso, contenedorBody)
        // console.log("Funciona el inicio de sesion despues");
        
        
    })

    // cambiar de inicio de sesion a registro
    btnRegistro.addEventListener("click", (e)=>{
        contenedor.classList.add("toggle")
    })
    btnInicioSesion.addEventListener("click", (e)=>{
        contenedor.classList.remove("toggle")
    })

    // mostrar la ventana modal
    await ajaxUser.getAll(contenedorUsuarios, fragment, template)

    btnOpen.addEventListener("click", (e)=>{
        modal.style.display = "flex"
    })
    btnClose.addEventListener("click", (e)=>{
        modal.style.display = "none"

    })
})