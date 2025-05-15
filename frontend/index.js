import ajaxUser from "./funciones/ajax.js"
import toast from "./funciones/toast.js"

const d = document
const $formRegister = d.querySelector(".registro")
const $formIngreso = d.querySelector(".inicioSesion")
const contenedor = d.querySelector("body")

d.addEventListener("DOMContentLoaded", (e)=>{

    $formRegister.addEventListener("submit",async(e)=>{
        e.preventDefault()
        await ajaxUser.createUser($formRegister, contenedor)
        
    })

    $formIngreso.addEventListener("submit",async(e)=>{
        e.preventDefault()
        await ajaxUser.signInUser($formIngreso, contenedor)
        
    })
//    toast("hola", contenedor)

})