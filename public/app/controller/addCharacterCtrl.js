app.controller('addCharacterCtrl', function ($scope, $rootScope, $location,services) {
    $scope.insertCharacter = function () {
        $location.path('/characters');
        globalCharacters.push({ nombre:$scope.characterName,
                                temporada: $scope.characterSeason,
                                capitulo: $scope.characterChapter,
                                characterId:findMaxID()+1 });
    };

    $scope.seasons = services.getSeasons();

    $scope.chapters = services.getChapters();
});


function findMaxID(){
    var aux=0;
    $.each(globalCharacters, function(i){
        if(globalCharacters[i].characterId >= aux) {
            aux=globalCharacters[i].characterId
        }
    });
    return aux;
}