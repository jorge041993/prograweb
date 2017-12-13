(function(){

	var app = angular.module('store', []);

	var historys = [
	{
     id: '1',
     titulo: 'I robot',
     autor: 'Isaac Asimov',
     editorial: 'Edhasa',
     descripcion: 'Los robots de Isaac Asimov son maquinas capaces de llevar a cabo muy diversas tareas, y que a menudo se plantean a si mismos problemas de conducta humana. Pero estas cuestiones se resuelven en Yo, robot en el ambito de las tres leyes fundamentales de la robotica, concebidas por Asimov, y que no dejan de proponer extraordinarias paradojas que a veces se explican por errores de funcionamiento y otras por la creciente complejidad de los programas. Las paradojas que se plantean en estos relatos futuristas no son solo ingeniosos ejercicios intelectuales sino sobre todo una indagacion sobre la situacion del hombre actual en relacion con los avances tecnologicos y con la experiencia del tiempo.',
     img: 'public/img/iRobot.jpg',
     reviews: [
        {stars: 5, body:'Buen libro, muy recomendado', author: 'alguien@algo.com'}
     ]
    },
	{
     id: '2',
     titulo: 'Juego de tronos',
     autor: 'George R. R. Martin',
     editorial: 'Gigamesh',
     descripcion: 'Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord Eddard Stark, senor de Invernalia, deja sus dominios para unirse a la corte de su amigo el rey Robert Baratheon, llamado el Usurpador, hombre discolo y otrora guerrero audaz cuyas mayores aficiones son comer, beber y engendrar bastardos. Eddard Stark ocupara el cargo de Mano del Rey e intentara desentranar una marana de intrigas que pondra en peligro su vida y la de todos los suyos. En un mundo cuyas estaciones pueden durar decenios y en el que retazos de una magia inmemorial y olvidada surgen en los rincones mas sombrios y maravillosos, la traicion y la lealtad, la compasion y la sed de venganza, el amor y el poder hacen del juego de tronos una poderosa trampa que atrapara en sus fauces a los personajes... y al lector.',
     img: 'public/img/iRobot.jpg',
     reviews: [
        {stars: 5, body:'Buen libro, muy recomendado', author: 'adrian@gmail.com'}
     ]
    },
    {
     id: '3',
     titulo: 'El Juego de Ender',
     autor: 'Orson Scott Card',
     editorial: 'Ediciones B / Zeta',
     descripcion: 'La Tierra esta amenazada por una especie extraterrestre de insectos que pretende destruir la humanidad. Para vencerlos se precisa la intervencion de un genio militar, por lo cual se permite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limita a dos el numero de descendientes. Ender se entrenara en una estacion espacial, superara a sus rivales y se convertira en la persona capaz de dirigir las flotas terrestres contra los insectos de otros mundos.',
     img: 'public/img/iRobot.jpg',
     reviews: [
        {stars: 5, body:'Buen libro, muy recomendado', author: 'adrian@gmail.com'}
     ]
    }
	];

	app.controller('StoreController', function(){
		this.books = historys;
	});

    app.controller('BooksController', function(){
        this.books = historys;
    });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        }

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }
    });

    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(book){
            book.reviews.push(this.review);
            this.review = {};
        }
    });

    app.controller('AddBookController', function(){
        this.histo = {};
        this.addBook = function(book){
            historys.push(this.histo);
            this.histo = {};
        }
    });
})();