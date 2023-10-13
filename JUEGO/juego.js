const llamada = document.querySelectorAll('.casilla');
const reincio = document.getElementById('reincio');
const mensaje = document.querySelector('.mensaje');
let jugador = 'X';
let fin = false;

llamada.forEach(casilla => {
    casilla.addEventListener('click', () => {
        if (!casilla.textContent && !fin) {
            casilla.textContent = jugador;
            casilla.style.backgroundColor = 'lightblue';
            jugador = jugador === 'X' ? 'O' : 'X';
            ganadorcito();
        }
    });
});

reincio.addEventListener('click', reiniciarjuego);

function ganadorcito() {
    const jugadas = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    for (let combo of jugadas) {
        const [a, b, c] = combo;
        if (
            llamada[a].textContent &&
            llamada[a].textContent === llamada[b].textContent &&
            llamada[a].textContent === llamada[c].textContent
        ) {
            mensaje.textContent = `¡${jugador === 'X' ? 'O' : 'X'} ha ganado!`;
            fin = true;
            break;
        }
    }

    if (!fin && Array.from(llamada).every(casilla => casilla.textContent)) {
        mensaje.textContent = '¡Empate!';
        fin = true;
    }
}

function reiniciarjuego() {
    llamada.forEach(casilla => {
        casilla.textContent = '';
        casilla.style.backgroundColor = 'lightgray';
    });
    jugador = 'X';
    fin = false;
    mensaje.textContent = '';
}
