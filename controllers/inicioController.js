(function(){
	'use strict'

	app.controller('InicioController',InicioController);

	InicioController.$inject = ['$scope'];
	function InicioController($scope)
	{
		$scope.title = "Página de Inicio";
		$scope.fb = "FaceBook/DEBSConsultores";

	}
})();