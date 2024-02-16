let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//1)crea una funcion que calcule el indice de la masa corporal (ICM) de una persona a partir de su altura en metros y peso en kilogramos, que recibiran como parametros.

function calculoICM(altura, peso) {
    var imc = peso / (altura * altura);
    return imc;
}

//2)crea una funcion que calcule el valor del factorial de un numero pasado como parametro.



//3)crea una funcion que comvierta un valor en dolares, pasado como parametro, y devuelva el valor equivalente en pesos colombianos. para esto, considera la cotizacion del dolar igual a R$4,80



//4)crea una funcion que muestre en pantalla el area y el perimetro de una sala rectangular, utilizando la altura y la anchura que se proporcionara como parametros.



//5)rea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.



//6)Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.



function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales() {
   asignarTextoElemento('h1','Juego del número secreto!');
   asignarTextoElemento('p',`Indica un número del 1 al 10`); 
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numero
    // generar el numero aleatorio
    // inicializar el nuemro de intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}

condicionesIniciales();



