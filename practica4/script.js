

/*var x = undefined;
console.log(x);  Martes

/*x=false;
console.log (x);

x='fulanito';

console.log(x);*/

/*var clave = undefined;
clave = null;
clave = false;
clave = 10.5
clave = fulanito;     
clave = symbol("Constante");
console.log(clave);*/


/*Miercoles*/
/*var edad ="18";
/*if (edad == 18){    /*Comparacion flexible*/
/*   if (edad == 18){   /*Comparacion estricta*/  /*casi siempre se usa la estricta */

/*console.log("Felicidades! Ahora puedes votar (Y no debes beber bueno si pero no xd");
    }
/*}*/
/*else{
    console.log("NEL");
}
*/
/*
console.log(clave);
var clave = 19;*/

/*SWITCH*/
var grade = 'A';
switch (grade) {
    case 'A':
        console.log("¡Perfect!")
        break;

    case 'B':
        console.log("Simon muy bien");

        break;
    case 'C':
        console.log("No tan bien");

        break;
    case 'D':
        console.log("Maso menos");

        break;
    case 'E':
        console.log("Mal");

        break;
    case 'F':
        console.log("Muy mal");

        break;

    default:
        console.log("Entrada no valida ni pepe");

}


/*WHILE*/
var contador =0;
while(contador < 10) {
    console.log("Valor While:" + contador++);  


}


/*FOR
*/

for(var i=0; i<10; i++){

    console.log("Valor for:" + i);

}


/* hoisting proceso de asignar a las variables memoria antes de ejecutar el codigo y ya en la 2da se empieza a ejecutar*/


/*var contador = 0;
if(true){
    while(contador<10) {
    contador++
}
}
console.log(contador);*/


/*Funciones y objetos*/

/*function concatenar(){
    console.log("Funcion Concatenar");
}
*/
/*concatenar();
concatenar();
concatenar();
concatenar();
concatenar();
concatenar();*/


/*concatenar("Hola mundo");   Si no tuviera esos valores tendría Undefined
function concatenar(cadena1, cadena2){
    console.log("Funcion Concatenar:"+ cadena1 + ""+ cadena2);

    segunda();

}
function segunda(){
    console.log("Segunda");
}*/

/*Lenguaje síncrono solo se ejecuta una instruccion a la vez y no necesariamente en orden*/



/*Forma Chafa

var objeto1 = new Object();
objeto1["edad"] = 21;
console.log(objeto1["edad"]);
objeto1["funcion1"] = function(nombre){
    console.log();
};

objeto1["funcion1"]("Fulano");
console.log(objeto1["funcion1"]);*/


/*  Forma PRO */
/*var objeto2 = {
  nombre : "Sultano", 
  Apellido : "Rivas",
funcion2 : function(Cadena){
    console.log(Cadena);

},
direccion : {
    calle : "Ave. Independencia",
    numero: "1322",
    colonia: "Centro";
}

};
objeto2.direccion.ciudad = "Chihuahua";

console.log(objeto2.nombre);
objeto2.funcion2("otra cosa");
console.log(objeto2.direccion.calle);
*/


/*Buenas practicas */
/*Evitar ciertas cosas*/
//Operador new
//Variables Globales
//Evitar == !=
//eval()
var number1 = new object();
var number1 = new Number();
var bool1 = new Boolean();
var string1 = new String("Cadena");
if(number1 == 10){
    console.log(Simon);
    

}
var objeto2 = {};
var number2 = 0;
var bool2 = false;
var string2 = "";
var funcion2 = function(){};

/*Siempre terminar los switch con default*/
/*Usar variables locales*/
function valorMaximo();{
   var x =0;   //Declarar e inicializar las variables
                //y Luego las operaciones
}
/*valorMaximo();
console.log(x);*/
/*Poner valores por defecto en parametros*/
function mostrarCadena(cadena){
    if(cadena === undefined){
        cadena ="valor por defecto";
    }
    //operaciones con los parametros
    console.log(cadena);

}
//mostrarCadena();

//Parametros dinamicos

function valorMaximo() {
   var max = -Infinity;
   for( var i=0; i< arguments.length; i++){
       if(max < arguments[i]){
           max = arguments[i];
       }
   }

   return max;

}
   console.log(valorMaximo(3,4,8,5,6,99,444,0));

   //Posible pregunta Examen cual diferencia hay entre objeto y arreglo, a los arregglos indice de numeros y objetos con string en los indices


   //Errores Comunes al usar JS

   /*Confundir sumas con concatenaciones*/

   var val1 = 5+10;
   var val2 = 5+"10";
   console.log(val1 + "" + val2);

   /*Los datos decimales estan fregados en JS*/
var p= 0.2 + 0.1;
var q = (0.2 * 10 + 0.1 * 10) / 10;
console.log(q);

//entrar a meteor.com e instalar el fw meteor