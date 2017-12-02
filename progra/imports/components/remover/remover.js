import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './remover.html';
import { InfoDB } from '../../api/info.js';

class Controlador {
    constructor($scope){
        $scope.removeInfo = function(){
            var lista = InfoDB.find({nombre: $scope.nameRemove}).fetch();
            var mensaje= "";
            for(var i=0; i<lista.length;i++){
                InfoDB.remove({
                    "_id": lista[i]._id
                });
               
            }
            
             if(lista.length=== 0){
                    mensaje ="No se encontraron objetos con ese nombre.";
                }else if (lista.length===1){
                    mensaje="Se elimino 1 objeto";
                }else{
                    mensaje= "Se eliminaron todos los objetos.";
                }
            Materialize.toast(mensaje,4000);
            
        }
    }
}


export default angular.module('removerMod',[angularMeteor]).component('removerComp',{
    templateUrl:'imports/components/remover/remover.html',
    controller: ["$scope", Controlador]
});
