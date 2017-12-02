import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './texto.html';

class Controlado {
    constructor(){
    this.nombre='Peliculas';
    this.moviesArray =["It", "The Shining", "Carrie","The Dark Tower"];
    this.countEnter=0;
    this.countExit=0;
    this.countMove=0;
    this.moveX=0;
    this.moveY=0;
    
    this.movieObject = [
        {
            "Num":1,
            "Nom":"Dumbo",
            "Clas": "AA",
            "Pop": "70%",
            "Im": "dumbo.jpg",
            "Ref":"https://es.wikipedia.org/wiki/Dumbo"
        },
         {
            "Num":2,
            "Nom":"El rey león",
            "Clas": "AA",
            "Pop": "93%",
            "Im": "simba.jpg",
            "Ref":"https://es.wikipedia.org/wiki/El_rey_le%C3%B3n"
        },
         {
            "Num":3,
            "Nom":"Tarzan",
            "Clas": "AA",
            "Pop": "75%",
            "Im": "tarzan.jpg",
            "Ref":"https://es.wikipedia.org/wiki/Tarz%C3%A1n_(pel%C3%ADcula_de_1999)"
        },
         {
            "Num":4,
            "Nom":"Avengers",
            "Clas": "AA",
            "Pop": "91%",
            "Im": "avengers.jpg",
            "Ref":"https://es.wikipedia.org/wiki/Los_Vengadores"
        },
         {
            "Num":5,
            "Nom":"Frozen",
            "Clas": "AA",
            "Pop": "86%",
            "Im": "frozen.png",
            "Ref":"https://es.wikipedia.org/wiki/Frozen_(pel%C3%ADcula_de_2013)"
        }
    ];
    this.msEnter= function(){
        this.countEnter++;
    }
    this.msExit= function(){
        this.countExit++;
    }
    this.msMove=function($event){
        this.moveX=$event.x;
        this.moveY=$event.y;
    }
    this.kPress= function($event){
        if($event.keyCode===13){
            alert("Presionaste Enter.");
           }
    }
    }
}


export default angular.module('textoMod',[angularMeteor]).component('textoComp',{
    templateUrl:'imports/components/texto/texto.html',
    controller: Controlado
});