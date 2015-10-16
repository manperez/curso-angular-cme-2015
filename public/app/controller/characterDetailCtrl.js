app.controller("characterDetailCtrl", ["$scope", "services", "$routeParams", "$sce", function($scope, services, $routeParams, $sce) {

    $scope.searchKey = $routeParams.name;

    services.getInfo($scope.searchKey)
        .then(
        function(data) {
            $scope.data = data;
            $scope.wikidata = Object.keys($scope.data.query.pages).map(function (key) {return $scope.data.query.pages[key]});
            $scope.wikidatafunction = function() {
                return $sce.trustAsHtml($scope.wikidata[0].extract);
            };
        },
        function(error) {
            $scope.error = error;
        });

}])