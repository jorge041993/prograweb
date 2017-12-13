import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '../imports/collections/parties';

var app = angular.module('4p8', [angularMeteor]);
var app1 = angular.module('4p9', [angularMeteor]);
app.controller("index", ["$scope", function($scope) {

$scope.nombre="";
$scope.telefono="";
$scope.pelicula="";
$scope.genero="";
$scope.comentarios="";
$scope.correo="";

$scope.showWatchmen=false;
$scope.showAvengers=false;
$scope.showFantastic=false;
$scope.showCapitan=false;

$scope.showHulk=false;
$scope.showXmen=false;
$scope.showThor=false;
$scope.showCivil=false;

$scope.showConjuro=false;
$scope.showHuerfana=false;
$scope.showTheBoy=false;
$scope.showHalloween=false;

$scope.showSaw1=false;
$scope.showSaw2=false;
$scope.showSaw3=false;
$scope.showSaw4=false;



$scope.showInicio=true;
$scope.showPeliculas=false;
$scope.showSeries=false;
$scope.showNoticias=false;
$scope.showPedidos=false;



 $scope.helpers({
    poblarlista() {
	  return Parties.find({});
	}
  });

$scope.mostrarInicio = function(){
	$scope.showInicio=true;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showWatchmen=false;
	$scope.showAvengers=false;
	$scope.showFantastic=false;
	$scope.showCapitan=false;
	$scope.showHulk=false;
	$scope.showXmen=false;
	$scope.showThor=false;
	$scope.showCivil=false;
	$scope.showConjuro=false;
	$scope.showHuerfana=false;
	$scope.showTheBoy=false;
	$scope.showHalloween=false;
	$scope.showSaw1=false;
	$scope.showSaw2=false;
	$scope.showSaw3=false;
	$scope.showSaw4=false;	
} 

$scope.mostrarPeliculas = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=true;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showWatchmen=false;
	$scope.showAvengers=false;
	$scope.showFantastic=false;
	$scope.showCapitan=false;
	$scope.showHulk=false;
	$scope.showXmen=false;
	$scope.showThor=false;
	$scope.showCivil=false;
	$scope.showConjuro=false;
	$scope.showHuerfana=false;
	$scope.showTheBoy=false;
	$scope.showHalloween=false;
	$scope.showSaw1=false;
	$scope.showSaw2=false;
	$scope.showSaw3=false;
	$scope.showSaw4=false;	

}

$scope.mostrarSeries = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=true;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showWatchmen=false;
	$scope.showAvengers=false;
	$scope.showFantastic=false;
	$scope.showCapitan=false;
	$scope.showHulk=false;
	$scope.showXmen=false;
	$scope.showThor=false;
	$scope.showCivil=false;
	$scope.showConjuro=false;
	$scope.showHuerfana=false;
	$scope.showTheBoy=false;
	$scope.showHalloween=false;
	$scope.showSaw1=false;
	$scope.showSaw2=false;
	$scope.showSaw3=false;
	$scope.showSaw4=false;	
 
}

$scope.mostrarNoticias = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=true;
	$scope.showPedidos=false;
	$scope.showWatchmen=false;
	$scope.showAvengers=false;
	$scope.showFantastic=false;
	$scope.showCapitan=false;
	$scope.showHulk=false;
	$scope.showXmen=false;
	$scope.showThor=false;
	$scope.showCivil=false;
	$scope.showConjuro=false;
	$scope.showHuerfana=false;
	$scope.showTheBoy=false;
	$scope.showHalloween=false;
	$scope.showSaw1=false;
	$scope.showSaw2=false;
	$scope.showSaw3=false;
	$scope.showSaw4=false;	
 
}

$scope.mostrarPedidos = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=true;
	$scope.showWatchmen=false;
	$scope.showAvengers=false;
	$scope.showFantastic=false;
	$scope.showCapitan=false;
	$scope.showHulk=false;
	$scope.showXmen=false;
	$scope.showThor=false;
	$scope.showCivil=false;
	$scope.showConjuro=false;
	$scope.showHuerfana=false;
	$scope.showTheBoy=false;
	$scope.showHalloween=false;
	$scope.showSaw1=false;
	$scope.showSaw2=false;
	$scope.showSaw3=false;
	$scope.showSaw4=false;	

}



$scope.borrartabla = function() {
	var lista = Parties.find().fetch();
	for (var i = 0; i < lista.length; i++) {
	  var id = lista[i]._id;
	  Parties.remove({"_id" : id});	
	}
  } 

$scope.mostrarWatchmen = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showWatchmen=true;
}  

$scope.mostrarAvengers = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showAvengers=true;
}  

$scope.mostrarFantastic = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showFantastic=true;
}  

$scope.mostrarCapitan = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showCapitan=true;
}  



$scope.mostrarHulk = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showHulk=true;
}  

$scope.mostrarXmen = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showXmen=true;
}  

$scope.mostrarThor = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showThor=true;
}  

$scope.mostrarCivil = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showCivil=true;
}  

$scope.mostrarCapitan = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showCapitan=true;
}  



$scope.mostrarConjuro = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showConjuro=true;
}  

$scope.mostrarHuerfana = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showHuerfana=true;
}  

$scope.mostrarTheBoy = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showTheBoy=true;
} 

$scope.mostrarHallowen = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showHalloween=true;
}  

$scope.mostrarSaw1 = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showSaw1=true;
}  

$scope.mostrarSaw2 = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showSaw2=true;
}  


$scope.mostrarSaw3 = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showSaw3=true;
}  
 

$scope.mostrarSaw4 = function(){
	$scope.showInicio=false;
	$scope.showPeliculas=false;
	$scope.showSeries=false;
	$scope.showNoticias=false;
	$scope.showPedidos=false;
	$scope.showSaw4=true;
}  















$scope.guardar = function() {

 //validar que no esten vacios
     if ($scope.nombre === "" || $scope.nombre === null || $scope.nombre === undefined) {
	  alert("Ingrese Nombre");
	  return;
	}
      
    if ($scope.telefono === "" || $scope.telefono === null || $scope.telefono === undefined) {
		alert("Ingrese Telefono");	
	    return;
	}
	
    if ($scope.pelicula === "" || $scope.pelicula === null || $scope.pelicula === undefined) {
	  alert("Ingrese Pelicula");
	  return;
	}	

	if ($scope.genero === "" || $scope.genero === null || $scope.genero === undefined) {
	  alert("Ingrese Genero");
	  return;
	}

	if ($scope.correo === "" || $scope.correo === null || $scope.correo === undefined) {
	  alert("Ingrese Email");
	  return;
	}

Parties.insert({
        "nombre" : $scope.nombre,
		"telefono" : $scope.telefono,
        "pelicula" : $scope.pelicula,
		"genero" : $scope.genero,
        "comentarios" : $scope.comentarios,
        "correo" : $scope.correo
	});

	alert("Solicitud Recivida")

}


}]);

app1.controller("contacto", ["$scope", function($scope) {

}]);

