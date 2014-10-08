var myApp = angular.module('myApp', [
  'ngRoute',
  'nameControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/names/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
