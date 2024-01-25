const nombre= document.getElementById("name")
const email= document.getElementById("email")
const password= document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnigs")

form.addEventListener('submit', e=>{
    e.preventDefault()
    let warnigs=""
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar= false
    
    if(nombre.value.lenght<5){
    warnigs += 'El nombre que ingresaste es demasiado corto'    
        entrar=true
}
        if(!regexEmail.test(email.value)){
            warnigs += 'El email que ingresaste no es valido'    
            entrar=true

        }
    if(password.value.lenght<8){
        warnigs += 'La contraseña que ingresaste es demasiado corto'    
            entrar=true
    }
    if(entrar){
        parrafo.innerHTML=warnigs
    }else{
        parrafo.innerHTML="Enviado"

    }
})
