app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                title: 'Home',
                templateUrl: 'app/view/home.html'
            })
            .when('/characters', {
                title: 'Personajes',
                templateUrl: 'app/view/characters.html',
                controller: 'listCharacterCtrl'
            })
            .when('/add-character', {
                 title: 'Agregar Personaje',
                 templateUrl: 'app/view/addCharacter.html',
                 controller: 'addCharacterCtrl'
             })
            .when('/characterDetail/:name', {
                templateUrl: 'app/view/characterDetail.html',
                controller: 'characterDetailCtrl',
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
