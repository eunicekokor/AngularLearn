var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.user = {};
	$scope.user.username = '';
	
	$http({
    	method: 'GET',
    	url: '//localhost:9000/yay'
  })
  
  .success(function (data, status, headers, config) {
    $scope.user.username = data.user.name;
  })

  .error(function (data, status, headers, config) {
    //
  });
  
}]);



myApp.controller('NavCtrl', ['$scope', function ($scope) {

}]);



myApp.controller('UserCtrl', ['$scope', function ($scope) {
	$scope.user = {};
	$scope.user.details = {
		"username": "Emekable",
		"id": "89101112"
	};
  
    $scope.name = '';
    $scope.email = '';
}]);



myApp.directive('customButton', function () {
	return {
		restrict: 'A',
	    replace: true,
	    transclude: true,
	    template: '<a href="" class="myawesomebutton" ng-transclude>' +
	                '<i class="icon-ok-sign"></i>' +
	              '</a>',
		link: function (scope, element, attrs) {

		}
	};
});