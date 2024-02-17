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

@ AULA 3
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

3)crea una funcion que comvierta un valor en dolares, pasado como parametro, y devuelva el valor equivalente en pesos colombianos. para esto, considera la cotizacion del dolar igual a $3777.95

function dolaresAPesos(dolares) {
    const tasaDeCambio = 3777.95;
    return dolares * tasaDeCambio;
}

// Ejemplo de uso:
const valorEnDolares = 50;
const equivalenteEnPesos = dolaresAPesos(valorEnDolares);
console.log(equivalenteEnPesos); // Output: 188897.5

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

5)crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
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

@ AULA 4

1)Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

2)Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' y 'Python'];


3)Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

4)Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();

5)Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();

6)Crea una función que calcule el promedio de los elementos en una lista de números.

function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista [i];
    }
    return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);

7)Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);

8)Crea una función que devuelva la suma de todos los elementos en una lista.

function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numeros = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros);
  console.log('Suma:', suma);

9)Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

10)Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error('Las listas deben tener la misma longitud');
    }

    let resultado = [];
    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
    }
    return resultado;
}

// Ejemplo de uso:
const lista1 = [1, 2, 3, 4];
const lista2 = [5, 6, 7, 8];
const resultado = sumarListas(lista1, lista2);
console.log(resultado); // Output: [6, 8, 10, 12]


11)Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function calcularCuadrados(lista) {
    let resultado = [];
    for (let i = 0; i < lista.length; i++) {
        resultado.push(lista[i] * lista[i]);
    }
    return resultado;
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5];
const cuadrados = calcularCuadrados(numeros);
console.log(cuadrados); // Output: [1, 4, 9, 16, 25]

*/
