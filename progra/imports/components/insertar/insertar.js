import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './insertar.html';
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
                cantidad: $scope.quanInfo,
                extra: $scope.extraInfo
            });
            
            Materialize.toast('El objeto se agrego exitosamente.',4000);
        }
        
        $scope.editInfo = function(){
        var lista = InfoDB.find({}).fetch();
        var inde = lista[$scope.indexInfo]._id;
            InfoDB.update({ _id: inde },
            {
                nombre:$scope.nameInfo,
                cantidad: $scope.quanInfo,
                extra: $scope.extraInfo
            });
            Materialize.toast('El objeto se edito.',4000);
            }
        }
    }




export default angular.module('insertarMod',[angularMeteor]).component('insertarComp',{
    templateUrl:'imports/components/insertar/insertar.html',
    controller: ["$scope", Controlador]
});
