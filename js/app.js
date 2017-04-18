var app = angular.module('debsApp',['ui.router'])

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('home',{
			url:'/',
			templateUrl: 'views/inicio.html',
			controller: 'InicioController'
		})
		.state('usuarios',{
			url:'/usuarios',
			templateUrl: 'views/usuarios.html',
			controller: 'UasuariosController'
		})
		.state('paises',{
			url:'/paises/:id?',
			templateUrl: 'views/paises.html',
			controller: 'PaisController'
		})
		.state('paises2',{
			url:'/paises2',
			templateUrl: 'views/paises2.html',
			controller: 'PaisController'
		})
		.state('404',{
			url: '/404',
			templateUrl: 'views/404.html'
		})
		.state('error',{
			templateUrl: 'views/404.html'
		});

	$urlRouterProvider.otherwise(function($injector, $location){
	    $injector.invoke(['$state', function($state) {
	        if( $location.$$path == '')
	            $state.go('home'); // redirect to /#/
	        else
	            $state.go('404'); // else go to 404 state
	    }]);
	});

});