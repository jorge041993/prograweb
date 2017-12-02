import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './exam.html';

class Controlado {
    constructor(){
      this.lst= [];
        
            this.addTarea = function(){
                this.lst.push({Filas:this.txtFilas, Columnas:this.txtColumnas});
            }}
   
    }

export default angular.module('examMod',[angularMeteor]).component('examComp',{
    templateUrl:'imports/components/exam/exam.html',
    controller: Controlado
});