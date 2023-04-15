var rut = document.getElementById('rut');
var paterno = document.getElementById('paterno');
var materno = document.getElementById('materno');
var nombre = document.getElementById('nombre');
var fecha = document.getElementById('fecha');
var edad = document.getElementById('edad');
var genero = document.getElementById('genero');
var email = document.getElementById('email');
var celular = document.getElementById('celular');
var profesion = document.getElementById('profesion');
var motivacion = document.getElementById('motivacion');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('enviando formulario');

    var mensajesError = [];
    
    if(rut.value === null || rut.value === ''){
        mensajesError.push('ingresa un rut');
    }

    if(paterno.value === null || paterno.value === ''){
        mensajesError.push('ingresa tu apellido paterno');
    }

    if(materno.value === null || materno.value === ''){
        mensajesError.push('ingresa tu apellido materno');
    }
    
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('ingresa tu nombre');
    }

    if(fecha.value === null || fecha.value === ''){
        mensajesError.push('ingresa tu fecha de nacimiento');
    }    

    if(edad.value === null || edad.value === ''){
        mensajesError.push('ingresa tu edad');
    }    

    if(genero.value === null || genero.value === ''){
        mensajesError.push('ingresa un genero');
    }    

    if(email.value === null || email.value === ''){
        mensajesError.push('ingresa una contraseña');
    }

    if(celular.value === null || celular.value === ''){
        mensajesError.push('ingresa una contraseña');
    }

    if(profesion.value === null || profesion.value === ''){
        mensajesError.push('ingresa una contraseña');
    }    

    if(motivacion.value === null || motivacion.value === ''){
        mensajesError.push('ingresa una contraseña');
    }    

    error.innerHTML = mensajesError.join(', ');
    return false;
}
