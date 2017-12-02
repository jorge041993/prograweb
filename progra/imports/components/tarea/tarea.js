import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './tarea.html';
import { InfoDB } from '../../api/info.js';

class Controlador {
    constructor($scope){
        $scope.helpers({
            objects() {
               return InfoDB.find({});
            }
        });
        $scope.insertInfo = function(){
            InfoDB.insert({
                nombre: $scope.nameInfo,
                apellidop: $scope.apellidopInfo,
                apellidom: $scope.apellidomInfo,
                activo: $scope.activoInfo,
                descripcion: $scope.descripcionInfo
            });
            
            Materialize.toast('El objeto se agrego exitosamente.',4000);
        }
        
        $scope.editInfo = function(){
        var lista = InfoDB.find({}).fetch();
        var inde = lista[$scope.indexInfo]._id;
            InfoDB.update({ _id: inde },
            {
                nombre: $scope.nameInfo,
                apellidop: $scope.apellidopInfo,
                apellidom: $scope.apellidomInfo,
                activo: $scope.activoInfo,
                descripcion: $scope.descripcionInfo
            });
            Materialize.toast('El objeto se edito.',4000);
            }

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




export default angular.module('tareaMod',[angularMeteor]).component('tareaComp',{
    templateUrl:'imports/components/tarea/tarea.html',
    controller: ["$scope", Controlador]
});