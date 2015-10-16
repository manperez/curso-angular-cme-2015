app.controller('listCharacterCtrl', function ($scope, services, $location) {
    $scope.characters =services.getCharacters();

    $scope.seasons = services.getSeasons();

    $scope.chapters = services.getChapters();

    $scope.deleteCharacter = function(character) {
        $location.path('/characters');
        if(confirm("Estás seguro que deseas eliminar a "+character.nombre)==true)
            services.deleteCharacter(character.characterId);
    };

    $scope.filterCharacter = '';

});

