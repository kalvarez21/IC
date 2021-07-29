//asigna a una variable el objeto canvas "dVinci"
var cuadro = document.getElementById('dVinci')
var papel = cuadro.getContext("2d")
var pintura = "red"//color del lapiz
var xi, yi//coordenadas iniciales
var clickear//
var h = 3//grosor del lapiz
//dibuja el marco del cuadro
dibujar(pintura, 0, 0, cuadro.width, 0, papel)
dibujar(pintura, 0, 0, 0, cuadro.height, papel)
dibujar(pintura, cuadro.width, 0, cuadro.width, cuadro.height, papel)
dibujar(pintura, 0,  cuadro.height, cuadro.width,  cuadro.height, papel)
pintura = "black"
//Captador de evento para el canvas
cuadro.addEventListener("mousedown",xyz)
cuadro.addEventListener("mousemove",xyz1)
cuadro.addEventListener("mouseup",xyz2)
//asignacion de objetos "boton" a una variable
var botonNegro = document.getElementById("btBlack")
var botonRojo = document.getElementById("btRed")
var botonAmarillo = document.getElementById("btYellow")
var botonBorrador = document.getElementById("btErase")
var botonIncremento = document.getElementById("btIncremento")
var botonDecremento = document.getElementById("btDecremento")
var botonAzul = document.getElementById("btBlue")
var botonVerde = document.getElementById("btGreen")
var botonRosado = document.getElementById("btPink")
//Captador de eventos con su respectiva funcion a cada boton
botonNegro.addEventListener("click",lapizNegro)
botonRojo.addEventListener("click", lapizRojo)
botonAmarillo.addEventListener("click", lapizAmarillo)
botonBorrador.addEventListener("click", lapizBorrador)
botonIncremento.addEventListener("click", incremento)
botonDecremento.addEventListener("click", decremento)
botonAzul.addEventListener("click",lapizAzul)
botonVerde.addEventListener("click",lapizVerde)
botonRosado.addEventListener("click",lapizRosado)

function xyz(event){
  // posicion inicial donde se empieza el dibujo
  xi = event.layerX
  yi = event.layerY
  // asignando el valor buttons que se obtiene del evento a la variable "clickear", para este caso siempre es 1
  clickear = event.buttons
}
function xyz1(event1){
  if (clickear == 1){
    // posicion final obtenida por el evento mousemove
    var xf = event1.layerX
    var yf = event1.layerY
    dibujar(pintura, xi, yi, xf, yf, papel)
    xi = xf
    yi = yf
  }
}
function xyz2(event2){
  var xf = event2.layerX
  var yf = event2.layerY
  if (xi == xf) { // Condicion que nos ayuda a poder dibujar simples puntos
    dibujar(pintura, xi - 1, yi - 1, xi + 1, yi + 1, papel)
  }
  clickear = event2.buttons; // de cumplirse la condicion solo asignara el valor a clickear de 0
}
//funciones que cambian el color del lapiz
function lapizNegro(){
  pintura = "black"
}
function lapizRojo(){
  pintura = "red"
}
function lapizAmarillo(){
  pintura = "yellow"
}
function lapizBorrador(){
  pintura = "white"
}
function lapizAzul(){
  pintura = "blue"
}
function lapizVerde(){
  pintura = "green"
}
function lapizRosado(){
  pintura = "pink"
}
//Funciones que varian el grosor del lapiz
function incremento(){
  if (h+1>6) {
    h = 6
    alert("Grosos Maximo")
  }
  else {
    h++;
  }
}
function decremento(){
  if (h-1<2) {
    h = 2
    alert("Grosos Minimo")
  }
  else {
    h--;
  }
}

function dibujar(color, xi, yi, xf, yf, lienzo){
  lienzo.beginPath()
  lienzo.strokeStyle = color
  lienzo.lineWidth = h
  lienzo.moveTo(xi, yi)
  lienzo.lineTo(xf, yf)
  lienzo.stroke()
  lienzo.closePath()
}
