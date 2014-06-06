var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.text = 'Hello, Angular fanatic.';
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