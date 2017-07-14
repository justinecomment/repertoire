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


myApp.service('contactsService',function($http) {
  this.getContacts = function(){
    return $http.get('http://localhost/repertoire/contacts.php').success(function(result){
        return result;
    })
  };

  this.postContact = function(dataAPoster){
    return $http({ 
        url: 'http://localhost/repertoire/contacts.php', 
        dataType: 'json', 
        method: 'POST', 
        data: dataAPoster,
        headers: {
          'Content-Type': 'application/json'
        }
    })
  }

});


myApp.controller('MainCtrl',function ($scope, contactsService, $http) {
   contactsService.getContacts().then(function(response) {
      $scope.totalEmail  =response.data.length;
   })
});

myApp.controller('contactCtrl', function($scope, contactsService, $http) { 
   contactsService.getContacts().then(function(response) {
      $scope.monContact  = response.data;
   })
});
 
myApp.controller('addCtrl' ,function($scope, $http, $location, contactsService){
  $scope.validateForm = function(){
    if($scope.myAddForm.$valid == true){
      var formData = {
            'nom' :  $scope.nom,
            'prenom' : $scope.prenom,
            'email' : $scope.email,
        };
      contactsService.postContact(formData);
      alert("nouveau contact crée");
      contactsService.getContacts()
      $location.path('/contacts');
    };
  }
});
