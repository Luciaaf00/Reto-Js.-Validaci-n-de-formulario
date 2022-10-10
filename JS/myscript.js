

function valida_envia(){
    var esNombre=true;
    var esApe1=true;
    var esApe2=true;
    var esCorreo=true;
    var esTelefono=true;
    var esDni=true;
    var esIban=true;
    var esSwift=true;
    var esUsuario=true;
    var esNacimiento=true;
    
    //Validación del nombre
    if (document.formulario.nombre.value.length==0){
        alert("Tiene que escribir su nombre")
        document.formulario.nombre.focus()
        esNombre=false
    }//Fin Si

    //Validación del primer apellido
    if (document.formulario.ape1.value.length==0){
        alert("Tiene que escribir su primer apellido")
        document.formulario.ape1.focus()
        esApe1=false
    }//Fin Si

    //Validación del segundo apellido
    if (document.formulario.ape2.value.length==0){
        alert("Tiene que escribir su segundo apellido")
        document.formulario.ape2.focus()
        esApe2=false
    }//Fin Si

    //Validación del correo electrónico
    if (document.formulario.correo.value.length==0){
        alert("Tiene que escribir su correo electrónico")
        document.formulario.correo.focus()
        esCorreo=false
    }else{
        //Se utiliza el .test para las expresiones regulares
        if(!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(document.formulario.correo.value))){
            alert("Este email no es válido, pruebe con otro")
            document.formulario.correo.focus()
            esCorreo=false
        }
    }

    //Validación del número de teléfono
    if (document.formulario.tlf.value.length==0){
        alert("Tiene que escribir su número de teléfono")
        document.formulario.tlf.focus()
        esTelefono=false
    }else{
        //Se utiliza el .test para las expresiones regulares
        if(!((/^[0-9]{3}[\s][0-9]{3}[\s][0-9]{3}$/.test(document.formulario.tlf.value)) || (/^[0-9]{3}[\s][0-9]{2}[\s][0-9]{2}[\s][0-9]{2}$/.test(document.formulario.tlf.value)))){
            alert("Este teléfono no es válido, pruebe con otro")
            document.formulario.tlf.focus()
            esTelefono=false
        }//Fin Si
    }//Fin Si

    //Validación del DNI
    if (document.formulario.DNI.value.length==0){
        alert("Tiene que escribir su número de DNI")
        document.formulario.DNI.focus()
        esDni=false
    }else{
        //Se utiliza el .test para las expresiones regulares
        if(!(/^[0-9]{8}[A-Z]{1}$/.test(document.formulario.DNI.value))){
            alert("Este DNI no es válido, pruebe con otro")
            document.formulario.DNI.focus()
            esDni=false
        }//Fin Si
    }//Fin Si

    //Validación del IBAN
    if (document.formulario.IBAN.value.length==0){
        alert("Tiene que escribir su número de IBAN")
        document.formulario.IBAN.focus()
        esIban=false
    }else{
        //Se utiliza el .test para las expresiones regulares
        if(!(/^[A-Z]{2}[0-9]{22}$/.test(document.formulario.IBAN.value))){
            alert("Este IBAN no es válido, pruebe con otro")
            document.formulario.IBAN.focus()
            esIban=false
        }//Fin Si
    }//Fin Si

    //Validación del swift
    if (document.formulario.Swift.value.length==0){
        alert("Tiene que escribir su número de Swift")
        document.formulario.Swift.focus()
        esSwift=false
    }else{
        //Se utiliza el .test para las expresiones regulares
        if(!(/^[A-Za-z]{8}[0-9]{3}?$/.test(document.formulario.Swift.value))){
            alert("Este Swift no es válido, pruebe con otro")
            document.formulario.Swift.focus()
            esSwift=false
        }//Fin Si
    }//Fin Si

    //Validación del nombre de usuario
    if (document.formulario.usuario.value.length==0){
        alert("Tiene que escribir su nombre de usuario")
        document.formulario.usuario.focus()
        esUsuario=false
    }//Fin Si

    //Validación de la fecha de nacimiento
    if (document.formulario.nacimiento.value.length==0){
        alert("Tiene que escribir su fecha de nacimiento")
        document.formulario.nacimiento.focus()
        esNacimiento=false
    }else{
        //Se utiliza el .test para las expresiones regulares
        if(!(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(document.formulario.nacimiento.value))){
            alert("Esta fecha de nacimiento no es válida, pruebe con otra")
            document.formulario.nacimiento.focus()
            esNacimiento=false
        }//Fin Si
    }//Fin Si


    if(esNombre==true && esApe1==true && esApe2==true && esCorreo==true && esTelefono==true && esDni==true && esIban==true && esSwift==true && esUsuario==true && esNacimiento==true){
        alert("Formulario enviado!!")
        document.formulario.envio.focus()
        return 0;
    }
    

    

}