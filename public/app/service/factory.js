app.factory("services", ['$http','$q', function($http,$q) {
    var obj = {};

    obj.getCharacters = function(){
        return globalCharacters;
    }

    obj.getSeasons = function(){
        return [{text: '1'},{text: '2'},{text: '3'},{text: '4'}];
    }

    obj.getChapters = function(){
        return [{text: '1'},{text: '2'},{text: '3'},{text: '4'},
                {text: '5'},{text: '6'},{text: '7'},{text: '8'},
                {text: '9'},{text: '10'}];
    }

    obj.deleteCharacter = function (id) {
        $.each(globalCharacters, function(i){
            if(globalCharacters[i].characterId === id) {
                globalCharacters.splice(i,1);
                return false;
            }
        });

    };

    obj.getInfo = function(text) {
        var defered = $q.defer();

        var url = 'http://en.wikipedia.org/w/api.php?titles=' + text + '&action=query&format=json&callback=JSON_CALLBACK&prop=extracts|pageimages&piprop=thumbnail&pithumbsize=200';

        $http.jsonp(url).then(function(response) {
            defered.resolve(response.data);
        }, function(response) {
            defered.reject(response.data)
        });
        return defered.promise;
    }


    return obj;
}]);
