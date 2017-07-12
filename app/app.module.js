var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'HTML/accueil.html'
  })
  .when('/contacts', {
    controller: 'contactCtrl',
    templateUrl: 'HTML/contacts.html'
  })
  .when('/add', {
    controller:'addCtrl',
    templateUrl:'HTML/contactAdd.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);


myApp.service('getAllContacts',function($http, $rootScope, ) {
  this.getContacts = function(){
    return $http.get('http://localhost/repertoire/contacts.php').success(function(result){
        return result;
    })
  };
});


myApp.controller('MainCtrl',function ($scope) {
  
});

myApp.controller('contactCtrl', function($scope,getAllContacts) { 
   getAllContacts.getContacts().then(function(response) {
           console.log(response.data)
            $scope.monContact  = response.data;
        }),function(error){
            return error;
        };
});
 
myApp.controller('addCtrl' ,function($scope, $http, $location){
  $scope.validateForm = function(){
    if($scope.myAddForm.$valid == true){
        console.log("valid");
        $location.path('/contacts');
    }
  }
});
