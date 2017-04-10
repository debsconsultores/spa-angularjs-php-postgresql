(function(){
	'use strict'

	app.controller('PaisController',PaisController);

	PaisController.$inject = ['$scope'];
	function PaisController($scope)
	{
		$scope.title = "Países";
	}
})();