app.config(function($routeProvider){
    $routeProvider
    .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'loginController'
    })
    .otherwise({
        redirectTo:'/'
    })
});