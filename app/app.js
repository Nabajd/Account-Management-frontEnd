
var app = angular.module('app', ['ngRoute' , 'ngCookies', 'multipleDatePicker' ]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    
    // $routeProvider.when("/collectionDeposit", {
        
    //    controller: "collectionDepositCtrl",
    //    templateUrl: "app/views/collectionDeposit.html"
       
    // });
    // // $routeProvider.when("/campaigns", {
    // //     controller: "campaignController",
    // //     templateUrl: "app/views/campaigns.html"
    // // });
    //   $routeProvider.otherwise({ redirectTo: "/" });

    //   $routeProvider.when('/', {
    //             controller: 'HomeController',
    //             templateUrl: 'app/views/home.view.html',
    //             controllerAs: 'vm'
    //         })

         $routeProvider.when("/newAccount", {        
             controller: "newAccountController",
             templateUrl: "app/views/new_account.html" 
                    
        })
            .when("/collectionDeposit", {       
             controller: "collectionDepositCtrl",
             templateUrl: "app/views/collectionDeposit.html"
             })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'app/views/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'app/views/register.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/newAccount' });
        
        }]);

app.run(['$rootScope', '$location', '$cookies', '$http', function ($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }]);
// app.run(['$rootScope', '$location', 'localStorageService', function ($rootScope, $location, localStorageService) {
// }]);