let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function mostrarhola() {
    console.log('Hola, mundo');
}



function mostrarNombre(nombre) {
    console.log(`hola, ${nombre}`);
}
mostrarNombre('Julieth');

function calcularDoble(numero) {
    return numero * 2;
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
}
let promedio = calcularPromedio(6, 11, 19);
console.log(promedio);

function encontrarMayor(a, b) {
    return a > b ? a : b;
}
let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);


function cuadrado(numero) {
    return numero = numero;
}

let resultado = cuadrado(2);
console.log(resultado);


function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarUsuario(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').Value);
    console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario);
    console.log(numeroUsuario === numeroSecreto);
    return;
}


function generarNumeroSecreto() {
     return Math.floor(Math.random()*10)+1;
}

asignarTexto('h1', 'Juego del numero secreto');
asignarTexto('p', 'Indica un numero del 1 al 10');
 


