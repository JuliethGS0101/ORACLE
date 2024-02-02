/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

function intentoUsuario() {
    alert('Click desde el boton');
}
function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}
function mostrarAlerta() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}
function mostarAlert(){
    alert("AMO JS");
} 
function sumaNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert(`${primerNumero} + ${segunNumero} = ${resultado}`)
}

HTML

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>JS Game</title>
</head>

<body>

    <div class="container">
        <div class="container__contenido">
            <div class="container__informaciones">
                <div class="container__texto">
                    <h1></h1>
                    <p class="texto__parrafo"></p>
                </div>
                <input type="number" min="1" max="10" class="container__input">
                <div class="chute container__botones">
                    <button onclick="intentoUsuario();" class="container__boton">Intentar</button>
                    <button onclick="mostarMensajeEnLaConsola()" class="button">Console</button>
                    <button onclick="mostrarAlerta()" class="button">Alert</button>
                    <button onclick="mostarAlert()" class="button">Alert</button>
                    <button onclick="sumaNumeros()" class="button">Suma</button>
                    <button class="container__boton" id="reiniciar" disabled>Nuevo juego</button>
                </div>
            </div>
            <img src="./img/ia.png" alt="Una persona mirando a la izquierda" class="container__imagen-persona" />
        </div>
    </div>




    <script src="app.js" defer></script>
</body>

</html>
*/
