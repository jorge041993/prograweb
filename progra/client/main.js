import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import listaMod from '../imports/components/lista/lista';
import textoMod from '../imports/components/texto/texto';
import claseMod from '../imports/components/clase/clase';
import insertarMod from '../imports/components/insertar/insertar';
import removerMod from '../imports/components/remover/remover';
import examMod from '../imports/components/exam/exam';
import maritzaMod from '../imports/components/maritza/maritza';
import guillermoMod from '../imports/components/guillermo/guillermo';
import tareaMod from '../imports/components/tarea/tarea';
import examen5Mod from '../imports/components/examen5/examen5';
import '../imports/startup/accounts-config.js';

var app = angular.module('example',[angularMeteor, listaMod.name, textoMod.name, 
    claseMod.name,insertarMod.name,removerMod.name,examMod.name,
    maritzaMod.name, guillermoMod.name, tareaMod.name, examen5Mod.name, uiRouter, 
    'accounts.ui']);

app.controller('control',["$scope",function($scope){
   $scope.shw = 1;
    }]);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
    .state('main',{
        url:"/",
        template: "<h1>Main</h1>"
    })
    .state('lista',{
       url:"/lista",
        template: "<lista-comp></lista-comp>"
    })
    .state('clase',{
       url:"/clase",
        template: "<clase-comp></clase-comp>"
    })
    .state('texto',{
       url:"/texto",
        template: "<texto-comp></texto-comp>"
    })
     .state('insertar',{
       url:"/insertar",
        template: "<insertar-comp></insertar-comp>"
    })
    .state('remover',{
       url:"/remover",
        template: "<remover-comp></remover-comp>"
    })
    .state('exam',{
       url:"/exam",
        template: "<exam-comp></exam-comp>"
    })
    .state('maritza',{
        url:"/maritza",
         template: "<maritza-comp></maritza-comp>"
     })
     .state('guillermo',{
        url:"/guillermo",
         template: "<guillermo-comp></guillermo-comp>"
     })
     .state('tarea',{
        url:"/tarea",
         template: "<tarea-comp></tarea-comp>"
     })
     .state('examen5',{
        url:"/examen5",
         template: "<examen5-comp></examen5-comp>"
     });
});



