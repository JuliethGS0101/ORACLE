/*1)Crear una función que muestre "¡Hola, mundo!" en la consola.

function mostrarHola() {
    console.log('Hola, mundo');
}

mostrarHola();

2)Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function mostrarNombre(nombre) {
    console.log(`hola, ${nombre}`);
}
mostrarNombre('Julieth');


3)Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function calcularDoble(numero) {
    return numero * 2;
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

4)Crear una función que reciba tres números como parámetros y devuelva su promedio.

function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
}
let promedio = calcularPromedio(6, 11, 19);
console.log(promedio);

5)Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function encontrarMayor(a, b) {
    return a > b ? a : b;
}
let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

6)Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadrado(numero) {
    return numero = numero;
}

let resultado = cuadrado(2);
console.log(resultado);

aula3
1)crea una funcion que calcule el indice de la masa corporal (ICM) de una persona a partir de su altura en metros y peso en kilogramos, que recibiran como parametros.

function calculoICM(altura, peso) {
    var imc = peso / (altura * altura);
    return imc;
}

2)crea una funcion que calcule el valor del factorial de un numero pasado como parametro.

function calculoFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calculoFactorial(numero - 1);
    }
}

// Ejemplo de uso 
let numero = 5;
let resultado = calculoFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

CORREGIR PESOS colombianos 
3)crea una funcion que comvierta un valor en dolares, pasado como parametro, y devuelva el valor equivalente en pesos colombianos. para esto, considera la cotizacion del dolar igual a R$4,80

function convertirDolaresAPesosCol(dolares) {
    var cotizacionDolar = 4.80;
    var pesosCol = dolares * cotizacionDolar;
    return pesosCol;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnPesosCol = convertirDolaresAPesosCol(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);


4)crea una funcion que muestre en pantalla el area y el perimetro de una sala rectangular, utilizando la altura y la anchura que se proporcionara como parametros.

function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log('Area: '+ area);
    console.log('perimetro: ' + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);

5)rea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio;
    var perimetro = 2 * pi * radio;
    console.log('Area: ' + area);
    console.log('perimetro: ' + perimetro);
}
// Ejeplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);

6)Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(numero + ' x ' + i + ' = ' + resultado);
    }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaMultiplicar(numero);

*/
