import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './clase.html';

class Controladora {
    constructor(){
    this.mail="Fulanito@gmail.com";
    this.age="1";
    this.libro="Diario de una pasión";
    this.Subscripcion=true;
    this.btnClick=function(){
        this.Agregar.push({
           "Correo": this.mail,
            "Edad":this.age,
            "Libro":this.libro
        });
    }
    
     
    
     this.Agregar = [
        {
            
            "Correo": "Perenganita@yopmail.com",
            "Edad": "2",
            "Libro": "Guerra de los Mundos"
            
        }
    ];
        }
    }


export default angular.module('claseMod',[angularMeteor]).component('claseComp',{
    templateUrl:'imports/components/clase/clase.html',
    controller: Controladora
});
