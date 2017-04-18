(function(){
	'use strict'

	app.controller('PaisController',PaisController);

	PaisController.$inject = ['$scope','$stateParams','Data'];
	function PaisController($scope,$stateParams,Data)
	{
		$scope.title = "Países";
		$scope.pais  = {};
		var Id = $stateParams.id
		if(Id)
			getOne(Id);
		//console.log($stateParams.id);

		getAll();

		function getAll(){
			Data.get('paises',{
				id:-1,
				action: 'get'
			}).then(function(results){
				//console.log(results);
				$scope.todosPaises = results;
			});
		}

		function getOne(idPais)
		{
			Data.get('paises',{
				id:idPais,
				action: 'get'
			}).then(function(results){
				//console.log(results);
				if(results.length>0){
					$scope.pais.codpais = results[0].codpais;
					$scope.pais.pais = results[0].pais;
				}else
				{
					alert("Id País No existe");
				}
			});
		}

	}
})();