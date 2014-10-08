var nameControllers = angular.module('nameControllers', ['ngAnimate']);

nameControllers.controller('ListController', ['$scope', '$http', 'NameSvc', function($scope, $http, NameSvc){
  NameSvc.getNames().success(function(data){
    $scope.names = data;
    $scope.nameOrder = "title";
  });
  // $http.get('js/names.json').success(function(data){
  //   $scope.names = data;
  //   $scope.nameOrder = "title";
  // });
}]);

nameControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', 'NameSvc', function($scope, $http, $routeParams, NameSvc){
  NameSvc.getNames().success(function(data){
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

  // $http.get('js/names.json').success(function(data){
  //   $scope.names = data;
  //   $scope.whichItem = $routeParams.itemId;

  //   if ($routeParams.itemId > 0){
  //     $scope.prevItem = Number($routeParams.itemId) - 1;
  //   } else {
  //     $scope.prevItem = $scope.names.length-1;
  //   }

  //   if ($routeParams.itemId < $scope.names.length-1){
  //     $scope.nextItem = Number($routeParams.itemId) + 1;
  //   } else {
  //     $scope.nextItem = 0;
  //   }

  // });
}]);
