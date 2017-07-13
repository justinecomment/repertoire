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


myApp.service('getAllContacts',function($http) {
  this.getContacts = function(){
    return $http.get('http://localhost/repertoire/contacts.php').success(function(result){
        return result;
    })
  };
});


myApp.controller('MainCtrl',function ($scope, getAllContacts, $http) {
   getAllContacts.getContacts().then(function(response) {
      $scope.totalEmail  =response.data.length;
   })
});

myApp.controller('contactCtrl', function($scope, getAllContacts, $http) { 
   getAllContacts.getContacts().then(function(response) {
      console.log(response)
      $scope.monContact  = response.data;
   })
});
 
myApp.controller('addCtrl' ,function($scope, $http, $location){
  $scope.validateForm = function(){
    if($scope.myAddForm.$valid == true){
       var formData = {
            'nom' :  $scope.nom,
            'prenom' : $scope.prenom,
            'email' : $scope.email,
        };

      $http({ 
        url: 'http://localhost/repertoire/contacts.php', 
        dataType: 'json', 
        method: 'POST', 
        data: formData,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      alert("nouveau contact crée");
      $location.path('/contacts');
    };
  }
});
