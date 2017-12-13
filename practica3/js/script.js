/*var x = null;
console.log(x);*/

/*x= false;
console.log(x);

x= 'fulanito';
console.log(x);*/

/*var clave = undefined;
clave = null;
clave = false;
clave = 10.5;
clave = 'Fulanito';
clave = Symbol("Constante");
console.log( clave);*/

/*miercoles */
/*IF*/
/*var edad = "18";*/
/*if (edad == 18){ comparacion flexible*/
    /*if (edad === 18){comparacion estricta
    console.log("Felicidades! Ahora puedes votar(y beber...)");
}else{
    console.log("Nope");
}*/
/*var clave = 19;
console.log(clave);*/

/*switch*/
/*var  grade = 'B';
switch(grade){
    case 'A':
    console.log("muy bien!!!!");
    break;
    case 'B':
    console.log("Bien");
    break;
    case 'C':
    console.log("Mas o menos");
    break;
    case 'D':
    console.log("Mal");
    break;
    case 'F':
    console.log("Tronado");
    break;
    default:
    console.log("Entrada no Valida");
}*/

/*while*/
/*var contador = 0;
 while (contador < 10 ){
     console.log("valor while: " + contador++);
 }*/

 /*for*/
 /*for(var i = 0; i<10; i++){
    console.log("Valor For: " + i);
 }*/

 
 /*if(true) {
     var contador = 0;
     while (contador < 10){
         contador ++;
     }
 }
 console.log(contador);*/

 /*js; lenguaje asincrono solo se ejecuta una instruccion a la vez en orden.*/
 /*concatenar("hola", "mundo");
 function concatenar(cadena1, cadena2){
     console.log("Funcion concatenar: "+ cadena1 + " " +  cadena2);
    segunda();
}

 function segunda(){
     console.log("segunda");
 }*/

 /*forma chafa*/
/*var objeto1 = new object();
objeto1["edad"] = 21;
console.log(objeto1["edad"]);
objeto1["funcion1"] = function (nombre){
    console.log(nombre);
};
objeto1["funcion1"]("fulano");
console.log(objeto1["funcion1"]);*/

/*forma pro*/
/*var objeto2 = {
nombre : "Perengano", 
apellido : "Perez",
funcion2 : function(cadena){
console.log(cadena);
},
direccion : {
    calle : "Ave. Independencia",
    numero : 1322,
    colonia : "Centro" 
}

}; 
console.log(objeto2.nombre);
objeto2.funcion2("Otra cosa");
 console.log(objeto2.direccion.calle);
 objeto2.direccion.ciudad = "Chihuahua";*/

 /*buenas practicas*/
 //Evitar:
 //- Operador new
 //- Variables globales 
 //- ==  !=  cuando quieren que se combierta un tipo de dato.
 //- eval()
 var objeto1 = new Object();
 var number1 = new Number (10);
 var bool1 = new boolean(false);
 var string1 = new string ("cadena");

 if (number1 === 10){
     console.log("simon");
 }
 var objeto2 = {};
 var number2 = 0;
 var bool2 = false;
 var string2 = "";
 var fincion2= function(){};

 /*siempre terminar los switch con default*/
 /*USAR VARIABLES LOCALES*/
 /* cloucher- moverle a una variable global*/ 
 function valor() {
     var x = 0;
}
valor();
/*console.log(x);*/

/*poner valores por defecto en parametros*/
function mostrarcadena (cadena){
    if(cadena === undefined){
        cadena = "valor por defecto";
    }
    /*operadores con los parametros*/
    console.log(cadena);
}
/*mostrarcadena();*/

/*arreglos vs objeto:  numeros con el indice y string con numeros */
/*parametros dinamicos*/
function valorMaximo(){
var max = -Infinity;
for (var i=0; i<arguments.length; i++){
    if(max< arguments[i]){
        max = arguments[i];
    }
}
return max;
}
console.log(valorMaximo(3,4,8,5,6,99,444,0));

/*errores comunes*/
/*confundir sumas con concatenaciones*/
var val1 = 5 +10;
var val2 = 5 + "10";
console.log(val2 + 5 + val1 );

/*los datos decimales estan fregados en js*/
var p = 0.2 + 0.1;
var q = (0.2 * 10 + 0.1 * 10)/10;
console.log(q);
