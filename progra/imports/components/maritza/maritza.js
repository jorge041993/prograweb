import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './maritza.html';

class Controlado {
    constructor(){
      this.lst= [];
        
            this.addTarea = function(){
                this.lst.push({Filas:this.txtFilas, Columnas:this.txtColumnas});
            }}
   
    }

export default angular.module('maritzaMod',[angularMeteor]).component('maritzaComp',{
    templateUrl:'imports/components/maritza/maritza.html',
    controller: Controlado
});