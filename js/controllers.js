var nameControllers = angular.module('nameControllers', ['ngAnimate']);

nameControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
  $http.get('js/names.json').success(function(data){
    $scope.names = data;
    $scope.nameOrder = "title";
  });
}]);

nameControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get('js/names.json').success(function(data){
    $scope.names = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0){
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.names.length-1;
    }

    if ($routeParams.itemId < $scope.names.length-1){
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);
