let imagen = [];
let cartas = [];
let movimientos = 0;
let juegoEnCurso = false;
let cartasEmparejadas = 0;

generarTablero();

function cargarimagen() {
  imagen = [
    '<img  class="icon" src="./imagenes/maxresdefault.jpg"  alt="...">',
    '<img  class="icon" src="./imagenes/lucifer.jpg"  alt="...">',
    '<img  class="icon" src="./imagenes/merlina.jpg"  alt="...">',
    '<img  class="icon" src="./imagenes/stranger things.jpg"  alt="...">',
    '<img  class="icon" src="./imagenes/AAAABc4Bp4lmhdqWFXsSJ2ArJhM2GocEp-O0WKOaEz3PkDu0bN9wVIE_TZeEGAnvRgWQzSDHS0w-d0hSVM5xjCBAQQFZanTCpgydC2SN.jpg"  alt="...">',
    '<img  class="icon" src="./imagenes/scale.jpg"  alt="...">',
    '<img  class="icon" src="./imagenes/American_Horror_Story.svg.png"  alt="...">',
    '<img  class="icon" src="./imagenes/descarga.jpg"  alt="...">',
    '<img  class="icon" src="./imagenes/0045281.jpg-r_654_368-f_jpg-q_x-xxyxx.jpg"  alt="...">',
    '<img  class="icon" src="./imagenes/greys.jpg"  alt="...">',
  ];
}

function generarTablero() {
  cargarimagen();
  cartas = [];
  movimientos = 0; 
  juegoEnCurso = true;
  let tablero = document.getElementById("tablero");
  let tarjetas = [];
  for (let i = 0; i < 20; i++) {
    tarjetas.push(`
            <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
              <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                  ${imagen[0]}
                </div>
                <div class="cara superior">
                  <i class="fas fa-tv"></i>
                </div>
              </div>
            </div>        
          `);
    if (i % 2 == 1) {
      imagen.splice(0, 1);
    }
  }
  tarjetas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = tarjetas.join(" ");
}
function deseleccionar(cartas) {
    setTimeout(() => {
      let trasera1 = document.getElementById("trasera" + cartas[0]);
      let trasera2 = document.getElementById("trasera" + cartas[1]);
      if (trasera1.innerHTML != trasera2.innerHTML) {
        let tarjeta1 = document.getElementById("tarjeta" + cartas[0]);
        let tarjeta2 = document.getElementById("tarjeta" + cartas[1]);
        tarjeta1.style.transform = "rotateY(0deg)";
        tarjeta2.style.transform = "rotateY(0deg)";
      } else {
        trasera1.style.background = "plum";
        trasera2.style.background = "plum";
        cartasEmparejadas += 2; 
        if (cartasEmparejadas === 20) {
          juegoTerminado(); 
        }
      }
    }, 1000);
  }
  
  
function seleccionarTarjeta(i) {
    if (!juegoEnCurso) {
      return; 
    }
  
    let tarjeta = document.getElementById("tarjeta" + i);
    if (tarjeta.style.transform != "rotateY(180deg)") {
      tarjeta.style.transform = "rotateY(180deg)";
      cartas.push(i);
      movimientos++;
      document.getElementById("movimientos").textContent = "Movimientos: " + movimientos;
  
      if (cartas.length == 2) {
        deseleccionar(cartas);
        cartas = [];
      }
    }
    
}
function juegoTerminado() {
    juegoEnCurso = false;
    document.getElementById("mensajeTerminado").style.display = "block"; 
    document.getElementById("tablero").style.display = "none"; 
  }
  