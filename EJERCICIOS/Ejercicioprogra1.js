/*
 @ primer ejercicio

1) alert ("¡Bienvenida y bievenido a nuestro sitio web!");

2)let nombre = ('Luna');
3)let edad = 25;
4)let numeroDeVentas = 50;
5)let saldoDisponible = 1000;

6)alert ("¡Error! Completa todos los campos");

7)let mensajeDeError = '¡Error! Completa todos los campos'
alert(mensajeDeError);

8)let Nombre = prompt ('Dijite su nombre');

9)let Edad = prompt ('Dijite su edad');
if (Edad >= 18) {
    alert('¡Puede obtener su licencia de conducir!');
}

@
alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
Es importante recordar que cuando el proyecto esté disponible para todas las personas, en lo que llamamos en el contexto del software "entorno de producción", los comandos console.log deben eliminarse o desactivarse, ya que pueden causar problemas de rendimiento y seguridad.


@ segundo ejercicio
let diaSemana = prompt ("¿Que dia de la semana es hoy?");

1)Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
if (diaSemana === 'sabado' || diaSemana === 'domingo'){
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

2)Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt('Ingresa un numero positivo o negativo');

if (numero > 0) {
    alert('Tu numero es positivo');
} else if (numero < 0){
    alert('Tu numero es negativo');
}else {
    alert('Tu numero es cero')
}

3)Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
let puntuacion = 105;

if (puntuacion >= 100) {
    console.log('¡FELICIDADES, has ganado!');
} else {
    console.log('Intenta de nuevo');
}

4)Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoCuenta = 500; 
alert(`Tu saldo es de $${saldoCuenta}.`);

5)Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt('Por favor, ingresa tu nombre');
alert(`¡Bienvenida, ${nombre}!`);

@ tercer ejercio

1) Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while(contador <= 10) {
console.log(contador);
contador++;
}

2) Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let cuentaRegresiva = 10;
while (cuentaRegresiva >= 0){
console.log(cuentaRegresiva);
cuentaRegresiva--;
}

3) Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroMax = prompt("Ingresa un numero para la cuenta regresiva:");

while (numeroMax >= 0) {
console.log(numeroMax);
numeroMax--;
}

4) Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroMax = prompt("Ingresa un numero para la cuenta progresiva:");
let contador = 0;

while ( contador <= numeroMax) {
console.log(contador);
contador++
}

@ cuarto ejercicio

1) Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

console.log('Bienvenid@ a nuestra consola')

2) Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

let nombre = 'Julieth Giraldo'

console.log(`Hola, ${nombre}!`)

3) Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

let nombre ='Julieth Giraldo'

alert(`Hola, ${nombre}`)

4) Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?')

console.log(lenguajePreferido);

5) Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 6;
let valor2 = 9;
let resultado = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`)

6) Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 10;
let valor2 = 6;
let resultado = valor1 - valor2;

console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`)

7) Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

 let edad = prompt('Ingresa tu edad');

 if (edad >= 18){
    console.log('Eres mayor de edad.');
 } else {
    console.log('Eres menor de edad.');
 }

 8) Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = prompt('Ingresa un numero');

if (numero > 0){
    alert('El numero es positivo');
} else if (numero == 0){
    alert('El numero es cero');
} else {
    alert('El numero es negativo');
}

9) Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let numero = 1;

while (numero <= 10){
    console.log(numero);
    numero++;
}

10) Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 10;

if (nota >= 7){
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

11) Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numeroAleatorio = Math.random();

console.log(numeroAleatorio);

12) Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let numeroEntero = parseInt(Math.random() * 10) + 1;

console.log(numeroEntero);

13) Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numeroAleatorio = parseInt(Math.random() * 1000) + 1;

console.log(numeroAleatorio);

*/
