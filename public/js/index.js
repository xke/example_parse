var app = angular.module('app', []);
function MainController($scope, $http){
	$scope.items = [];
	$scope.date = '';
	$http.get('/all').success(function(data) {
    	$scope.items = data;
  	});
  	$('#dp3').datepicker({format: 'dd/mm/yyyy'}).on('changeDate', function(ev){
  		$scope.date = $('#date').val();
  		$scope.$apply();
 	});
  	
}