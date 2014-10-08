angular.module('myApp')
	.factory('NameSvc', ['$http', function($http){
		return {
			getNames: function(){
				return $http({
					method: 'GET',
					url: 'https://99names.firebaseio.com/names.json'
				});
			}
		};

	}]);