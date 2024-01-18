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



*/
