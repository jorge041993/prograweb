import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './lista.html';

class Controlador {
    constructor(){
        this.ttl = "Interfaz de template";
        this.txtTarea="Dormir";
        this.lst= [
            {tarea:"Alsar la casa"},
            {tarea: "Hacer la tarea"},
            {tarea: "Usar Facebook 9 hrs"}
        ];
            this.addTarea = function(){
                this.lst.push({tarea: this.txtTarea});
            }
        }
    }


export default angular.module('listaMod',[angularMeteor]).component('listaComp',{
    templateUrl:'imports/components/lista/lista.html',
    controller: Controlador
});
