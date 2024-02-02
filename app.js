let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        //Aqui el ID va sin # por que no es necesario, se llama al id como tal
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        // El susuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
   // valorCaja.value = '';
   document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    //si el numero generado esta incluido en la lista, realizar operacion sino otra.

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles.')
    }else{
        if (listaNumeroSorteados.includes(numeroGenerado)){
            // recursividad, la funcion se llama asi misma
            return generarNumeroSecreto();
        }else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto!");
    asignarTextoElemento("P",`Indica un numero del 1 al ${numeroMaximo}.`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    // se selecciona el boton reiniciar con el id reiniciar, set atrtribute adigna valor mediante 2 parametros
    // se esta seteado 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}

condicionesIniciales();