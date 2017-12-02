import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './guillermo.html';

class Controlado {
    constructor(){
      this.lst= [];
        
            this.addTarea = function(){
                this.lst.push({Filas:this.txtFilas, Columnas:this.txtColumnas});
            }}
   
    }

export default angular.module('guillermoMod',[angularMeteor]).component('guillermoComp',{
    templateUrl:'imports/components/guillermo/guillermo.html',
    controller: Controlado
});