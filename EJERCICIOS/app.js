//variable
let numeroSecreto = 6;
let numeroUsuario = 0;
while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Elige un número entre 1 a 10:");

    console.log(numeroUsuario);
    /*Este codigo realiza la comparacion*/

    if (numeroUsuario == numeroSecreto) {
        alert(`Adivinaste, el numero es: ${numeroUsuario}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //alert('Lo siento, no acertaste el numero');
    }
}


