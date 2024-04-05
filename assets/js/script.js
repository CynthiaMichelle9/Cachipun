let piedra = 0;
let papel = 1;
let tijera = 2;


function obtenerJugadaIA() {
    return Math.floor(Math.random() * 3); // Devuelve un número aleatorio entre 0 y 2, que representa la jugada de la IA
}

function quienGana(jugadaUsuario, jugadaIA) {
    if (jugadaUsuario === jugadaIA) {
        return "Empate"; // Ambas jugadas son iguales, es un empate
    } else if (
        (jugadaUsuario === piedra && jugadaIA === tijera) || // Piedra vs Tijera
        (jugadaUsuario === papel && jugadaIA === piedra) ||  // Papel vs Piedra
        (jugadaUsuario === tijera && jugadaIA === papel)     // Tijera vs Papel
    ) {
        return "Usuario"; // Usuario gana
    } else {
        return "IA"; // IA gana
    }
}

function cachipun() {

    alert("¡Bienvenido al ca-chi-pún!")
    let jugadas = parseInt(prompt("Ingrese el número de veces que desea jugar contra la computadora "));
    
    for (let i = 0; i < jugadas; i++) {
        console.log('Ronda ' + (i + 1));

        let opcionUsuario = prompt("Escribe \"Piedra\", \"Papel\" o \"Tijera\":").toLowerCase();

        let opcionUsuarioNum;
        switch (opcionUsuario) {
            case "piedra":
                opcionUsuarioNum = piedra;
                break;
            case "papel":
                opcionUsuarioNum = papel;
                break;
            case "tijera":
                opcionUsuarioNum = tijera;
                break;
            default:
                console.log("Opción inválida. Inténtalo de nuevo.");
                continue; // Vuelve al inicio del bucle
        }

        let opcionIA = obtenerJugadaIA();

        let resultado = quienGana(opcionUsuarioNum, opcionIA);
        console.log(`Tú: ${opcionUsuario}`);
        console.log(`IA: ${obtenerNombreJugada(opcionIA)}`);

        switch (resultado) {
            case "Usuario":
                console.log("¡Has ganado, felicidades!");
                break;
            case "IA":
                console.log("¡La IA ha ganado esta vez, intenta nuevamente!");
                break;
            case "Empate":
                console.log("¡Es un empate!");
                break;
        }
    }
}

// Función auxiliar para obtener el nombre de la jugada según el número
function obtenerNombreJugada(numero) {
    switch (numero) {
        case piedra:
            return "Piedra";
        case papel:
            return "Papel";
        case tijera:
            return "Tijera";
    }
}

// Iniciar el juego
cachipun();
