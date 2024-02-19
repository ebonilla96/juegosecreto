// esto se usar para asignar texto al html
//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Juego del numero secreto';

//let parrafo = document.querySelector ('p');
//parrafo.innerHTML = 'Indicame un numero del 1 al 10';


//esto es lo mismo pero en una funcion mas reducida

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else {
        //El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
   
    return;

}
function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';

    // Lo de arriba es igual a esto

    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecerto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros

    if(listaNumerosSorteados.length == numeroMaximo) {

        asignarTextoElemento('p','Ya se sortearon todos los numero posibles');

    } else {


    // si el numero generado esta incluido en la lista esta incluido en la lista


        if (listaNumerosSorteados.includes(numeroGenerado)){

            return generarNumeroSecerto();


        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecerto();
    intentos = 1;

    
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros

    //inicializar el número de intentos

    //generar numero aleatorio

    condicionesIniciales();

    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}


//aqui llamamos a la a la variable en la funcion y asignamos

condicionesIniciales();