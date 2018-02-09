function iniciar(){

//Se guarda la referencia del elemento canvas en la variable llamada elemento
var elemento = document.getElementById('lienzo');
//Creacion del objeto lienzo que define el elemento en un conexto 2d para disponer de una rejilla de pixeles para dibujar
lienzo = elemento.getContext('2d');


lienzo.beginPath();
lienzo.fillStyle = "Brown";
lienzo.fillRect(0, 300, 2000, 800);
//Variables para controlar la posicion de todo el castillo en el lienzo
var cx = 10;
var cy = 5;
//Variable auxiliares fijas para las posiciones del castillo en el eje x
var clax = 100;
var clbx = 150;
var clcx = 200;
var cldx = 250;
var clex = 300;
var clfx = 350;
var clgx = 400;
var clhx = 450;
//Variable auxiliares fijas para las posiciones del castillo en el eje y
var clay = 200;
var clby = 250;
var clcy = 300;
var cldy = 350;
var cley = 400;
var clfy = 450;
var clgy = 500;
var clhy = 550;
//Dibujando el castillo
//Agregando el grosor de las lineas que se dibujaran y el color de fondo para el castillo 
lienzo.beginPath();
lienzo.lineWidth = 2; //Tamaño de la linea
lienzo.lineJoin = "miter"; //Estilo de linea
lienzo.fillStyle = "orange"; //Color de relleno para la siguiente figura
/*Coordenas para dibujar las lineas del castillo, usando moveTo para posisionar el trazo de 
la linea en un punto determinado y lineTo para dibujar la linea hasta esa otro coordenada*/
lienzo.moveTo(cx+clax, cy+500);
lienzo.lineTo(cx+clax, cy+clay);
lienzo.lineTo(cx+clbx, cy+clay);
lienzo.lineTo(cx+clbx, cy+clby);
lienzo.lineTo(cx+clcx, cy+clby);
lienzo.lineTo(cx+clcx, cy+clay);
lienzo.lineTo(cx+cldx, cy+clay);
lienzo.lineTo(cx+cldx, cy+clby);
lienzo.lineTo(cx+clex, cy+clby);
lienzo.lineTo(cx+clex, cy+clay);
lienzo.lineTo(cx+clfx, cy+clay);
lienzo.lineTo(cx+clfx, cy+clby);
lienzo.lineTo(cx+clgx, cy+clby);
lienzo.lineTo(cx+clgx, cy+clay);
lienzo.lineTo(cx+clhx, cy+clay);
lienzo.lineTo(cx+clhx, cy+500);
lienzo.lineTo(cx+clax, cy+500);
lienzo.fill();
lienzo.stroke();
//Dibujando la bandera del castillo
lienzo.beginPath();
lienzo.lineWidth = 3;
lienzo.strokeStyle = "black"; //Agregando color a la linea en el estilo del lienzo
lienzo.moveTo(cx+clcx+25, cy+clay);
lienzo.lineTo(cx+clcx+25, cy+50);
lienzo.stroke();
lienzo.fillStyle = "red";
lienzo.moveTo(cx+clcx+25, cy+50);
lienzo.lineTo(cx+clcx+100, cy+85);
lienzo.lineTo(cx+clcx+25, cy+120);
lienzo.fill();
//Dibujando la ventana de la derecha
lienzo.beginPath();
lienzo.lineWidth = 4;
lienzo.lineCap = "round";
lienzo.lineJoin = "round";
lienzo.fillStyle = "black";
lienzo.strokeStyle = "purple";
lienzo.fillRect(cx+clfx, cy+clay+100, 50, 50);
lienzo.strokeRect(cx+clfx, cy+clay+100, 50, 50);
lienzo.fill();
//Dibujando la ventana oscura
lienzo.beginPath();
lienzo.fillStyle = "yellow";
lienzo.fillRect(cx+clbx, cy+clay+100, 50, 50);
//Dibujando la puerta del castillo
lienzo.beginPath();
lienzo.fillStyle = "darkgray";
lienzo.fillRect(cx+clcx+25, cy+430, 100, 70);
lienzo.moveTo(cx+clcx+25, cy+430);
lienzo.lineTo(cx+clcx+75, cy+400);
lienzo.lineTo(cx+clcx+125, cy+430);
lienzo.fill();

//Dibujando lechuza
lienzo.beginPath();
lienzo.lineJoin = "round"; //Agregando un estilo redondeado a la linea del lapiz virutal
lienzo.lineWidth = 4; //Ancho de la linea que dibujara el lapiz virtual
lienzo.strokeStyle = "white";
lienzo.moveTo(cx, cy+40);
lienzo.quadraticCurveTo(cx+45, cy+10, cx+50, cy+40); //curva cuadrática
lienzo.moveTo(cx+50, cy+40);
lienzo.quadraticCurveTo(cx+90, cy+10, cx+100, cy+40); //curva cuadrática
lienzo.stroke();

//Dibujando luna llena
lienzo.beginPath();
//Agregando una varible para utilizar un gradiente del color sobre la figura del sol
var gradiente = lienzo.createRadialGradient(cx+clhx+120,cy+50,10,cx+clhx+120,cy+50,45);
gradiente.addColorStop("0","white"); //Agregando el color amarillo en el centro de la figura
gradiente.addColorStop("0.5","darkgray"); //Agregando el color naranja en la mitad del diametro
gradiente.addColorStop("0.8","black");
gradiente.addColorStop("1","darkgray"); //Agregando el color rojo en la circunferencia del circulo
lienzo.fillStyle = gradiente; //Agregando el gradiente con los colores al estilo del lienzo
lienzo.arc(cx+clhx+120, cy+50, 45, 0, Math.PI*2, false); //Dibujando el circulo
lienzo.fill(); //Finalizando el relleno de la figura dibujandola en el lienzo

/*Se guardara el lienzo con la funcion save() para poder restaurarlo despues de haber 
usado la funcion clip() la cual se utlizara para hacer los trazos de las ramas del pino 
que se dibujara a continuacion*/
lienzo.save();

//Dibujando el pino
lienzo.beginPath();
lienzo.lineWidth = 7;
lienzo.strokeStyle = "#6E2C00"; //Agregando color del tronco
lienzo.moveTo(cx+45, cy+500); //Dibujando el tronco del pino
lienzo.lineTo(cx+45, cy+420);
lienzo.stroke();
lienzo.beginPath();
lienzo.fillStyle = "red"; //Color parte verde del pino
lienzo.moveTo(cx+15, cy+420);//Definiendo el area para las ramas del pino
lienzo.lineTo(cx+45, cy+240);
lienzo.lineTo(cx+75, cy+420);
lienzo.lineTo(cx+15, cy+420);
lienzo.fill();
lienzo.clip(); //Funcion para que solo se pueda dibujar dentro del area definida arriba
lienzo.beginPath(); //Comenzando hacer las ramas del pino
lienzo.strokeStyle = "darkgreen";
for (var i=cy+240; i<cy+422; i=i+15) { //Ciclo for para que se dibujen todas las ramas del pino
	lienzo.moveTo(cx+15, i);
	lienzo.lineTo(cx+75, i);
}
lienzo.stroke();

/*Funcion para restaurar el lienzo despues de haber utilizado la funcion clip() pues esta
no permite seguir dibujando fuera del area predefinida*/
lienzo.restore();
lienzo.save();

lienzo.beginPath();
//Color de la sombra para el texto que se dibujara en el lienzo
lienzo.shadowColor = "rgba(0,0,255,0.5)";
//longitud de la sombra en las posiciones "x" y "y"
lienzo.shadowOffsetX = 4;
lienzo.shadowOffsetY = 4;
//Grado de disipacion de la sombra
lienzo.shadowBlur = 5;
//Tamaño y caracteristicas de la fuente para el texto 
lienzo.font = "bold 42px verdana, Century Gothic";
//Creacion de una varible para utilizar un gradiente del color sobre el texto
var gradiente2 = lienzo.createLinearGradient(0, 0, elemento.width, 0);
gradiente2.addColorStop("0","black"); //Indicando donde empieza el color y cual pintara
lienzo.fillStyle = gradiente2; //Se agrega el gradiente con el color al estilo del lienzo



lienzo.restore();


lienzo.stroke();

}
window.addEventListener("load", iniciar, false);